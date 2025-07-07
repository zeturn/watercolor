import{r as l,j as e}from"./iframe-DqwHGwZR.js";import{F as a,a as t,b as m,c as v}from"./FormHelperText-DKZnNJbR.js";import{C as h}from"./Checkbox-7AD96CMh.js";import{R as g}from"./Radio-DVttdDrg.js";import{S as T}from"./Switch-CgNDdZQ8.js";import{I as k}from"./Input-6KFaJsd_.js";import{B as I}from"./Button-D3FJQjBm.js";/* empty css              *//* empty css              */const J={title:"Components/Form (React)",component:a,parameters:{docs:{description:{component:"水彩设计系统的表单组件系统，包含FormControl、FormControlLabel、FormGroup和FormHelperText。使用现代化纯CSS设计，减少阴影效果。"}}},tags:["autodocs"]},F={render:()=>{const[c,u]=l.useState(!1),[s,n]=l.useState("option1"),[x,p]=l.useState(!1);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"FormControl with Checkbox"}),e.jsxs(a,{error:!1,margin:"normal",children:[e.jsx(t,{label:"我同意服务条款",control:e.jsx(h,{checked:c,onChange:o=>u(o.target.checked)}),required:!0}),e.jsx(m,{children:"请阅读并同意我们的服务条款"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"FormControl with Radio (Error State)"}),e.jsxs(a,{error:!0,margin:"normal",children:[e.jsx(t,{label:"选项 1",control:e.jsx(g,{checked:s==="option1",onChange:()=>n("option1")})}),e.jsx(t,{label:"选项 2",control:e.jsx(g,{checked:s==="option2",onChange:()=>n("option2")})}),e.jsx(m,{error:!0,children:"请选择一个有效选项"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"FormControl with Switch"}),e.jsxs(a,{margin:"normal",children:[e.jsx(t,{label:"启用通知",control:e.jsx(T,{checked:x,onChange:o=>p(o.target.checked)}),labelPlacement:"start"}),e.jsx(m,{children:"开启后将接收系统通知"})]})]})]})}},f={render:()=>{const[c,u]=l.useState([]),[s,n]=l.useState(""),[x,p]=l.useState([]),o=b=>{const{value:i,checked:r}=b.target;u(r?d=>[...d,i]:d=>d.filter(w=>w!==i))},C=b=>{const{value:i,checked:r}=b.target;p(r?d=>[...d,i]:d=>d.filter(w=>w!==i))};return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"垂直FormGroup - 兴趣爱好"}),e.jsxs(a,{margin:"normal",children:[e.jsxs(v,{children:[e.jsx(t,{label:"阅读",control:e.jsx(h,{value:"reading",onChange:o})}),e.jsx(t,{label:"运动",control:e.jsx(h,{value:"sports",onChange:o})}),e.jsx(t,{label:"音乐",control:e.jsx(h,{value:"music",onChange:o})})]}),e.jsxs(m,{children:["选择您的兴趣爱好 (已选: ",c.join(", ")||"无",")"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"水平FormGroup - 性别"}),e.jsxs(a,{margin:"normal",children:[e.jsxs(v,{row:!0,children:[e.jsx(t,{label:"男性",control:e.jsx(g,{checked:s==="male",onChange:()=>n("male")})}),e.jsx(t,{label:"女性",control:e.jsx(g,{checked:s==="female",onChange:()=>n("female")})}),e.jsx(t,{label:"其他",control:e.jsx(g,{checked:s==="other",onChange:()=>n("other")})})]}),e.jsxs(m,{children:["请选择您的性别 (已选: ",s||"无",")"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"紧凑间距FormGroup"}),e.jsxs(a,{margin:"normal",children:[e.jsxs(v,{spacing:"compact",children:[e.jsx(t,{label:"邮件通知",control:e.jsx(h,{value:"email",onChange:C})}),e.jsx(t,{label:"短信通知",control:e.jsx(h,{value:"sms",onChange:C})})]}),e.jsxs(m,{children:["选择您的通知偏好 (已选: ",x.join(", ")||"无",")"]})]})]})]})}},j={render:()=>{const[c,u]=l.useState(""),[s,n]=l.useState(""),[x,p]=l.useState(!1),[o,C]=l.useState({}),b=()=>{const r={};return c?/\\S+@\\S+\\.\\S+/.test(c)||(r.email="邮箱地址格式不正确"):r.email="邮箱地址不能为空",s?s.length<8&&(r.password="密码长度不能少于8位"):r.password="密码不能为空",C(r),Object.keys(r).length===0},i=r=>{r.preventDefault(),b()&&alert("登录成功!")};return e.jsxs("form",{onSubmit:i,className:"p-6 border rounded-lg max-w-sm space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-center",children:"登录"}),e.jsxs(a,{margin:"normal",fullWidth:!0,error:!!o.email,children:[e.jsx(t,{label:"邮箱地址",required:!0}),e.jsx(k,{type:"email",value:c,onChange:r=>u(r.target.value),placeholder:"请输入邮箱",error:!!o.email}),o.email&&e.jsx(m,{error:!0,children:o.email})]}),e.jsxs(a,{margin:"normal",fullWidth:!0,error:!!o.password,children:[e.jsx(t,{label:"密码",required:!0}),e.jsx(k,{type:"password",value:s,onChange:r=>n(r.target.value),placeholder:"请输入密码",error:!!o.password}),o.password&&e.jsx(m,{error:!0,children:o.password})]}),e.jsxs(v,{row:!0,style:{justifyContent:"space-between",alignItems:"center"},children:[e.jsx(t,{label:"记住我",control:e.jsx(h,{checked:x,onChange:r=>p(r.target.checked)})}),e.jsx("a",{href:"#",className:"text-sm text-blue-600 hover:underline",children:"忘记密码?"})]}),e.jsx(I,{type:"submit",color:"primary",fullWidth:!0,children:"登录"})]})}};var S,E,G;F.parameters={...F.parameters,docs:{...(S=F.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [checkboxValue, setCheckboxValue] = useState(false);
    const [radioValue, setRadioValue] = useState('option1');
    const [switchValue, setSwitchValue] = useState(false);
    return <div className="space-y-6">\r
        <div>\r
          <h3 className="text-lg font-semibold mb-4">FormControl with Checkbox</h3>\r
          <FormControl error={false} margin="normal">\r
            <FormControlLabel label="我同意服务条款" control={<Checkbox checked={checkboxValue} onChange={e => setCheckboxValue(e.target.checked)} />} required />\r
            <FormHelperText>请阅读并同意我们的服务条款</FormHelperText>\r
          </FormControl>\r
        </div>\r
\r
        <div>\r
          <h3 className="text-lg font-semibold mb-4">FormControl with Radio (Error State)</h3>\r
          <FormControl error={true} margin="normal">\r
            <FormControlLabel label="选项 1" control={<Radio checked={radioValue === 'option1'} onChange={() => setRadioValue('option1')} />} />\r
            <FormControlLabel label="选项 2" control={<Radio checked={radioValue === 'option2'} onChange={() => setRadioValue('option2')} />} />\r
            <FormHelperText error>请选择一个有效选项</FormHelperText>\r
          </FormControl>\r
        </div>\r
\r
        <div>\r
          <h3 className="text-lg font-semibold mb-4">FormControl with Switch</h3>\r
          <FormControl margin="normal">\r
            <FormControlLabel label="启用通知" control={<Switch checked={switchValue} onChange={e => setSwitchValue(e.target.checked)} />} labelPlacement="start" />\r
            <FormHelperText>开启后将接收系统通知</FormHelperText>\r
          </FormControl>\r
        </div>\r
      </div>;
  }
}`,...(G=(E=F.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var N,y,V;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [interests, setInterests] = useState([]);
    const [gender, setGender] = useState('');
    const [preferences, setPreferences] = useState([]);
    const handleInterestsChange = e => {
      const {
        value,
        checked
      } = e.target;
      if (checked) {
        setInterests(prev => [...prev, value]);
      } else {
        setInterests(prev => prev.filter(item => item !== value));
      }
    };
    const handlePreferencesChange = e => {
      const {
        value,
        checked
      } = e.target;
      if (checked) {
        setPreferences(prev => [...prev, value]);
      } else {
        setPreferences(prev => prev.filter(item => item !== value));
      }
    };
    return <div className="space-y-8">\r
        <div>\r
          <h3 className="text-lg font-semibold mb-4">垂直FormGroup - 兴趣爱好</h3>\r
          <FormControl margin="normal">\r
            <FormGroup>\r
              <FormControlLabel label="阅读" control={<Checkbox value="reading" onChange={handleInterestsChange} />} />\r
              <FormControlLabel label="运动" control={<Checkbox value="sports" onChange={handleInterestsChange} />} />\r
              <FormControlLabel label="音乐" control={<Checkbox value="music" onChange={handleInterestsChange} />} />\r
            </FormGroup>\r
            <FormHelperText>选择您的兴趣爱好 (已选: {interests.join(', ') || '无'})</FormHelperText>\r
          </FormControl>\r
        </div>\r
\r
        <div>\r
          <h3 className="text-lg font-semibold mb-4">水平FormGroup - 性别</h3>\r
          <FormControl margin="normal">\r
            <FormGroup row>\r
              <FormControlLabel label="男性" control={<Radio checked={gender === 'male'} onChange={() => setGender('male')} />} />\r
              <FormControlLabel label="女性" control={<Radio checked={gender === 'female'} onChange={() => setGender('female')} />} />\r
              <FormControlLabel label="其他" control={<Radio checked={gender === 'other'} onChange={() => setGender('other')} />} />\r
            </FormGroup>\r
            <FormHelperText>请选择您的性别 (已选: {gender || '无'})</FormHelperText>\r
          </FormControl>\r
        </div>\r
\r
        <div>\r
          <h3 className="text-lg font-semibold mb-4">紧凑间距FormGroup</h3>\r
          <FormControl margin="normal">\r
            <FormGroup spacing="compact">\r
              <FormControlLabel label="邮件通知" control={<Checkbox value="email" onChange={handlePreferencesChange} />} />\r
              <FormControlLabel label="短信通知" control={<Checkbox value="sms" onChange={handlePreferencesChange} />} />\r
            </FormGroup>\r
            <FormHelperText>选择您的通知偏好 (已选: {preferences.join(', ') || '无'})</FormHelperText>\r
          </FormControl>\r
        </div>\r
      </div>;
  }
}`,...(V=(y=f.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var L,H,R;j.parameters={...j.parameters,docs:{...(L=j.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [errors, setErrors] = useState({});
    const validateForm = () => {
      const newErrors = {};
      if (!email) {
        newErrors.email = '邮箱地址不能为空';
      } else if (!/\\\\S+@\\\\S+\\\\.\\\\S+/.test(email)) {
        newErrors.email = '邮箱地址格式不正确';
      }
      if (!password) {
        newErrors.password = '密码不能为空';
      } else if (password.length < 8) {
        newErrors.password = '密码长度不能少于8位';
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = e => {
      e.preventDefault();
      if (validateForm()) {
        alert('登录成功!');
      }
    };
    return <form onSubmit={handleSubmit} className="p-6 border rounded-lg max-w-sm space-y-4">\r
        <h2 className="text-xl font-bold text-center">登录</h2>\r
        <FormControl margin="normal" fullWidth error={!!errors.email}>\r
          <FormControlLabel label="邮箱地址" required />\r
          <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="请输入邮箱" error={!!errors.email} />\r
          {errors.email && <FormHelperText error>{errors.email}</FormHelperText>}\r
        </FormControl>\r
\r
        <FormControl margin="normal" fullWidth error={!!errors.password}>\r
          <FormControlLabel label="密码" required />\r
          <Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="请输入密码" error={!!errors.password} />\r
          {errors.password && <FormHelperText error>{errors.password}</FormHelperText>}\r
        </FormControl>\r
\r
        <FormGroup row style={{
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>\r
          <FormControlLabel label="记住我" control={<Checkbox checked={remember} onChange={e => setRemember(e.target.checked)} />} />\r
          <a href="#" className="text-sm text-blue-600 hover:underline">忘记密码?</a>\r
        </FormGroup>\r
        \r
        <Button type="submit" color="primary" fullWidth>登录</Button>\r
      </form>;
  }
}`,...(R=(H=j.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};const K=["FormControlExample","FormGroupExample","LoginFormExample"];export{F as FormControlExample,f as FormGroupExample,j as LoginFormExample,K as __namedExportsOrder,J as default};
