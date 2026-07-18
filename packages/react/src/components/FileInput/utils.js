/**
 * FileInput 共用工具函数
 */

/**
 * 获取FileInput包装器类名
 * @param {Object} options - 配置选项
 * @returns {string} 类名字符串
 */
export const getFileInputClasses = (variant) => {
  return `wc-file-input-wrapper variant-${variant}`
}

/**
 * 验证文件格式
 * @param {FileList|File[]} files - 文件列表
 * @param {string} accept - 接受的文件格式
 * @returns {Object} 验证结果 { valid: File[], invalid: File[] }
 */
export function validateFiles(files, accept = '') {
  if (!accept) return { valid: [...files], invalid: [] }
  
  const acceptList = accept.split(',').map(a => a.trim())
  const valid = []
  const invalid = []
  
  Array.from(files).forEach(file => {
    const isValid = acceptList.some(rule => {
      if (rule.startsWith('.')) {
        return file.name.toLowerCase().endsWith(rule.toLowerCase())
      }
      
      // MIME type 检查
      if (rule.includes('/')) {
        if (rule.endsWith('/*')) {
          const baseType = rule.substring(0, rule.length - 2)
          return file.type.startsWith(baseType)
        }
        return file.type === rule
      }
      
      return false
    })
    
    if (isValid) {
      valid.push(file)
    } else {
      invalid.push(file)
    }
  })
  
  return { valid, invalid }
}

/**
 * 检查文件大小限制
 * @param {File[]} files - 文件数组
 * @param {number} maxSize - 最大文件大小（字节）
 * @param {number} maxTotal - 最大总大小（字节）
 * @returns {Object} 检查结果 { valid: File[], oversized: File[], totalOverflow: boolean }
 */
export function checkFileSizes(files, maxSize = Infinity, maxTotal = Infinity) {
  const valid = []
  const oversized = []
  let totalSize = 0
  
  files.forEach(file => {
    if (file.size > maxSize) {
      oversized.push(file)
    } else {
      valid.push(file)
      totalSize += file.size
    }
  })
  
  const totalOverflow = totalSize > maxTotal
  
  return { valid, oversized, totalOverflow, totalSize }
}

/**
 * 格式化文件大小
 * @param {number} bytes - 字节数
 * @param {number} decimals - 小数位数
 * @returns {string} 格式化后的大小字符串
 */
export function formatFileSize(bytes, decimals = 2) {
  if (bytes === 0) return '0 B'
  
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

/**
 * 获取文件类型图标
 * @param {File} file - 文件对象
 * @returns {string} 文件类型图标
 */
export function getFileTypeIcon(file) {
  const { type, name } = file
  
  // 图片文件
  if (type.startsWith('image/')) return '🖼️'
  
  // 文档文件
  if (type.includes('pdf')) return '📄'
  if (type.includes('word') || name.endsWith('.docx') || name.endsWith('.doc')) return '📝'
  if (type.includes('excel') || name.endsWith('.xlsx') || name.endsWith('.xls')) return '📊'
  if (type.includes('powerpoint') || name.endsWith('.pptx') || name.endsWith('.ppt')) return '📈'
  
  // 压缩文件
  if (type.includes('zip') || type.includes('rar') || type.includes('tar')) return '🗜️'
  
  // 音频文件
  if (type.startsWith('audio/')) return '🎵'
  
  // 视频文件
  if (type.startsWith('video/')) return '🎬'
  
  // 代码文件
  const codeExtensions = ['.js', '.ts', '.jsx', '.tsx', '.html', '.css', '.scss', '.json', '.xml']
  if (codeExtensions.some(ext => name.endsWith(ext))) return '💻'
  
  // 文本文件
  if (type.startsWith('text/') || name.endsWith('.txt')) return '📋'
  
  // 默认文件图标
  return '📁'
}

/**
 * 处理拖拽事件
 * @param {DragEvent} event - 拖拽事件
 * @param {Object} callbacks - 回调函数对象
 */
export function handleDragEvents(event, callbacks = {}) {
  const { onDragEnter, onDragLeave, onDragOver, onDrop } = callbacks
  
  event.preventDefault()
  event.stopPropagation()
  
  switch (event.type) {
    case 'dragenter':
      if (onDragEnter) onDragEnter(event)
      break
    case 'dragleave':
      if (onDragLeave) onDragLeave(event)
      break
    case 'dragover':
      if (onDragOver) onDragOver(event)
      break
    case 'drop':
      if (onDrop) onDrop(event)
      break
  }
}

/**
 * 从拖拽事件中获取文件
 * @param {DragEvent} event - 拖拽事件
 * @returns {File[]} 文件数组
 */
export function getFilesFromDragEvent(event) {
  const files = []
  
  if (event.dataTransfer.items) {
    // 使用 DataTransferItemList 接口
    Array.from(event.dataTransfer.items).forEach(item => {
      if (item.kind === 'file') {
        const file = item.getAsFile()
        if (file) files.push(file)
      }
    })
  } else {
    // 使用 FileList 接口
    Array.from(event.dataTransfer.files).forEach(file => {
      files.push(file)
    })
  }
  
  return files
}

/**
 * 检查是否支持拖拽上传
 * @returns {boolean} 是否支持
 */
export function isDragSupported() {
  const div = document.createElement('div')
  return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)
}

/**
 * 读取文件内容
 * @param {File} file - 文件对象
 * @param {string} readAs - 读取方式: 'text' | 'dataURL' | 'arrayBuffer' | 'binaryString'
 * @returns {Promise} Promise对象
 */
export function readFile(file, readAs = 'dataURL') {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    
    reader.onload = (e) => resolve(e.target.result)
    reader.onerror = (e) => reject(e)
    
    switch (readAs) {
      case 'text':
        reader.readAsText(file)
        break
      case 'dataURL':
        reader.readAsDataURL(file)
        break
      case 'arrayBuffer':
        reader.readAsArrayBuffer(file)
        break
      case 'binaryString':
        reader.readAsBinaryString(file)
        break
      default:
        reader.readAsDataURL(file)
    }
  })
}

/**
 * 创建文件预览
 * @param {File} file - 文件对象
 * @returns {Promise<string>} 预览URL
 */
export async function createFilePreview(file) {
  if (file.type.startsWith('image/')) {
    try {
      return await readFile(file, 'dataURL')
    } catch {
      return null
    }
  }
  
  // 非图片文件返回null
  return null
}

/**
 * 上传文件
 * @param {File} file - 文件对象
 * @param {string} url - 上传URL
 * @param {Object} options - 上传选项
 * @returns {Promise} 上传Promise
 */
export function uploadFile(file, url, options = {}) {
  const {
    method = 'POST',
    headers = {},
    fieldName = 'file',
    data = {},
    onProgress,
    signal
  } = options
  
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    const formData = new FormData()
    
    // 添加文件
    formData.append(fieldName, file)
    
    // 添加其他数据
    Object.keys(data).forEach(key => {
      formData.append(key, data[key])
    })
    
    // 监听上传进度
    if (onProgress) {
      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const percent = (e.loaded / e.total) * 100
          onProgress(percent, e)
        }
      })
    }
    
    // 监听完成事件
    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const response = JSON.parse(xhr.responseText)
          resolve(response)
        } catch {
          resolve(xhr.responseText)
        }
      } else {
        reject(new Error(`Upload failed: ${xhr.status} ${xhr.statusText}`))
      }
    })
    
    // 监听错误事件
    xhr.addEventListener('error', () => {
      reject(new Error('Upload failed'))
    })
    
    // 监听取消事件
    if (signal) {
      signal.addEventListener('abort', () => {
        xhr.abort()
        reject(new Error('Upload cancelled'))
      })
    }
    
    // 设置请求头
    Object.keys(headers).forEach(key => {
      xhr.setRequestHeader(key, headers[key])
    })
    
    // 发送请求
    xhr.open(method, url)
    xhr.send(formData)
  })
}

/**
 * 生成唯一文件ID
 * @param {File} file - 文件对象
 * @returns {string} 唯一ID
 */
export function generateFileId(file) {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substr(2, 9)
  const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_')
  return `${timestamp}_${random}_${sanitizedName}`
} 