// 组件元数据多语言翻译（中文源见 data/components.jsx）
// 仅包含中文之外的 5 种语言；缺失时回退到 data/components.jsx 中的中文原文。
// 结构：compI18n[组件id] = { description: { lang: 文本 }, props: { 属性名: { lang: 文本 } } }

export const compI18n = {
  button: {
    description: {
      'en-US': 'Basic button to trigger actions, with multiple variants and sizes.',
      'ja-JP': 'アクションを実行する基本ボタン。複数のバリエーションとサイズに対応。',
      'fr-FR': 'Bouton de base pour déclencher des actions, avec plusieurs variantes et tailles.',
      'de-DE': 'Grundlegender Button zum Auslösen von Aktionen, mit mehreren Varianten und Größen.',
      'es-ES': 'Botón básico para disparar acciones, con varias variantes y tamaños.',
    },
    props: {
      variant: { 'en-US': 'Visual variant of the button', 'ja-JP': 'ボタンの視覚的なバリエーション', 'fr-FR': 'Variante visuelle du bouton', 'de-DE': 'Visuelle Variante des Buttons', 'es-ES': 'Variante visual del botón' },
      size: { 'en-US': 'Button size', 'ja-JP': 'ボタンのサイズ', 'fr-FR': 'Taille du bouton', 'de-DE': 'Button-Größe', 'es-ES': 'Tamaño del botón' },
      color: { 'en-US': 'Main color of the button', 'ja-JP': 'ボタンのメインカラー', 'fr-FR': 'Couleur principale du bouton', 'de-DE': 'Hauptfarbe des Buttons', 'es-ES': 'Color principal del botón' },
      disabled: { 'en-US': 'Whether the button is disabled', 'ja-JP': '無効にするかどうか', 'fr-FR': 'Indique si le bouton est désactivé', 'de-DE': 'Ob der Button deaktiviert ist', 'es-ES': 'Si el botón está deshabilitado' },
      fullWidth: { 'en-US': 'Whether to fill the parent width', 'ja-JP': '親コンテナの幅いっぱいに広げるか', 'fr-FR': 'Remplit la largeur du conteneur parent', 'de-DE': 'Füllt die Breite des Elternelements', 'es-ES': 'Si ocupa todo el ancho del contenedor' },
      loading: { 'en-US': 'Whether to show a loading state', 'ja-JP': '読み込み状態を表示するか', 'fr-FR': 'Affiche un état de chargement', 'de-DE': 'Zeigt einen Ladezustand an', 'es-ES': 'Si muestra un estado de carga' },
      onClick: { 'en-US': 'Click event callback', 'ja-JP': 'クリックイベントのコールバック', 'fr-FR': 'Rappel sur événement de clic', 'de-DE': 'Callback für Klick-Ereignis', 'es-ES': 'Callback del evento de clic' },
    },
  },
  fab: {
    description: {
      'en-US': 'Floating action button for page-level quick actions.',
      'ja-JP': 'ページレベルのクイックアクション用のフローティングアクションボタン。',
      'fr-FR': 'Bouton d\'action flottant pour les actions rapides de niveau page.',
      'de-DE': 'Schwebender Aktionsbutton für seitenweite Schnellaktionen.',
      'es-ES': 'Botón de acción flotante para acciones rápidas de nivel de página.',
    },
    props: {
      variant: { 'en-US': 'Circular or extended style', 'ja-JP': '円形または拡張スタイル', 'fr-FR': 'Style circulaire ou étendu', 'de-DE': 'Kreis- oder erweiterter Stil', 'es-ES': 'Estilo circular o extendido' },
      color: { 'en-US': 'Main color of the button', 'ja-JP': 'ボタンのメインカラー', 'fr-FR': 'Couleur principale du bouton', 'de-DE': 'Hauptfarbe des Buttons', 'es-ES': 'Color principal del botón' },
      position: { 'en-US': 'Positioning method', 'ja-JP': '配置方法', 'fr-FR': 'Méthode de positionnement', 'de-DE': 'Positionierungsart', 'es-ES': 'Método de posicionamiento' },
      label: { 'en-US': 'Text label in extended mode', 'ja-JP': '拡張モード時のテキストラベル', 'fr-FR': 'Libellé texte en mode étendu', 'de-DE': 'Textlabel im erweiterten Modus', 'es-ES': 'Etiqueta de texto en modo extendido' },
    },
  },
  iconbutton: {
    description: {
      'en-US': 'Icon-only button, commonly used in toolbars.',
      'ja-JP': 'アイコンのみのボタン。ツールバーの操作によく使われます。',
      'fr-FR': 'Bouton avec uniquement une icône, souvent utilisé dans les barres d\'outils.',
      'de-DE': 'Nur-Symbol-Button, häufig in Werkzeugleisten verwendet.',
      'es-ES': 'Botón solo con icono, usado a menudo en barras de herramientas.',
    },
    props: {
      size: { 'en-US': 'Icon size', 'ja-JP': 'アイコンのサイズ', 'fr-FR': 'Taille de l\'icône', 'de-DE': 'Icon-Größe', 'es-ES': 'Tamaño del icono' },
      color: { 'en-US': 'Icon color', 'ja-JP': 'アイコンの色', 'fr-FR': 'Couleur de l\'icône', 'de-DE': 'Icon-Farbe', 'es-ES': 'Color del icono' },
      edge: { 'en-US': 'Negative margin alignment', 'ja-JP': 'ネガティブマージンの配置', 'fr-FR': 'Alignement avec marge négative', 'de-DE': 'Ausrichtung mit negativem Rand', 'es-ES': 'Alineación con margen negativo' },
      disabled: { 'en-US': 'Whether the button is disabled', 'ja-JP': '無効にするかどうか', 'fr-FR': 'Indique si le bouton est désactivé', 'de-DE': 'Ob der Button deaktiviert ist', 'es-ES': 'Si el botón está deshabilitado' },
    },
  },
  textfield: {
    description: {
      'en-US': 'Text input with label, prefix/suffix and error states.',
      'ja-JP': 'ラベル、接頭辞・接尾辞、エラー表示などに対応したテキスト入力。',
      'fr-FR': 'Champ texte avec label, préfixe/suffixe et états d\'erreur.',
      'de-DE': 'Texteingabe mit Label, Präfix/Suffix und Fehlerzuständen.',
      'es-ES': 'Entrada de texto con etiqueta, prefijo/sufijo y estados de error.',
    },
    props: {
      label: { 'en-US': 'Input label', 'ja-JP': '入力欄のラベル', 'fr-FR': 'Libellé du champ', 'de-DE': 'Eingabelabel', 'es-ES': 'Etiqueta del campo' },
      variant: { 'en-US': 'Visual variant', 'ja-JP': '視覚的なバリエーション', 'fr-FR': 'Variante visuelle', 'de-DE': 'Visuelle Variante', 'es-ES': 'Variante visual' },
      type: { 'en-US': 'HTML input type', 'ja-JP': 'HTML input の type', 'fr-FR': 'Type de l\'input HTML', 'de-DE': 'HTML input type', 'es-ES': 'Tipo de input HTML' },
      multiline: { 'en-US': 'Whether it is a multiline text field', 'ja-JP': '複数行のテキストエリアか', 'fr-FR': 'Champ texte multiligne', 'de-DE': 'Mehrzeiliges Textfeld', 'es-ES': 'Si es un campo de texto multilínea' },
      rows: { 'en-US': 'Number of rows when multiline', 'ja-JP': '複数行時の行数', 'fr-FR': 'Nombre de lignes en multiligne', 'de-DE': 'Zeilenzahl bei Mehrzeiligkeit', 'es-ES': 'Número de filas en multilínea' },
      error: { 'en-US': 'Whether to show error state', 'ja-JP': 'エラー状態を表示するか', 'fr-FR': 'Affiche un état d\'erreur', 'de-DE': 'Zeigt den Fehlerzustand', 'es-ES': 'Si muestra estado de error' },
      helperText: { 'en-US': 'Helper or error text', 'ja-JP': 'ヘルプ/エラーテキスト', 'fr-FR': 'Texte d\'aide ou d\'erreur', 'de-DE': 'Hilfe- oder Fehlertext', 'es-ES': 'Texto de ayuda o error' },
      prefix: { 'en-US': 'Prefix content', 'ja-JP': '接頭辞コンテンツ', 'fr-FR': 'Contenu du préfixe', 'de-DE': 'Präfix-Inhalt', 'es-ES': 'Contenido del prefijo' },
      suffix: { 'en-US': 'Suffix content', 'ja-JP': '接尾辞コンテンツ', 'fr-FR': 'Contenu du suffixe', 'de-DE': 'Suffix-Inhalt', 'es-ES': 'Contenido del sufijo' },
    },
  },
  select: {
    description: {
      'en-US': 'Dropdown selector supporting single and multiple selection.',
      'ja-JP': '単一選択と複数選択に対応したドロップダウン選択。',
      'fr-FR': 'Sélecteur déroulant prenant en charge la sélection simple et multiple.',
      'de-DE': 'Dropdown-Auswahl mit Einzel- und Mehrfachauswahl.',
      'es-ES': 'Selector desplegable con selección única y múltiple.',
    },
    props: {
      label: { 'en-US': 'Select label', 'ja-JP': '選択ボックスのラベル', 'fr-FR': 'Libellé du sélecteur', 'de-DE': 'Auswahllabel', 'es-ES': 'Etiqueta del selector' },
      options: { 'en-US': 'Options array {label, value}', 'ja-JP': 'オプション配列 {label, value}', 'fr-FR': 'Tableau d\'options {label, value}', 'de-DE': 'Optionsarray {label, value}', 'es-ES': 'Array de opciones {label, value}' },
      multiple: { 'en-US': 'Whether multiple selection is allowed', 'ja-JP': '複数選択を許可するか', 'fr-FR': 'Sélection multiple autorisée', 'de-DE': 'Mehrfachauswahl erlaubt', 'es-ES': 'Si permite selección múltiple' },
      searchable: { 'en-US': 'Whether it is searchable', 'ja-JP': '検索可能か', 'fr-FR': 'Recherchable', 'de-DE': 'Durchsuchbar', 'es-ES': 'Si es buscable' },
      placeholder: { 'en-US': 'Placeholder text', 'ja-JP': 'プレースホルダー', 'fr-FR': 'Texte de placeholder', 'de-DE': 'Platzhaltertext', 'es-ES': 'Texto de marcador' },
      error: { 'en-US': 'Whether to show error state', 'ja-JP': 'エラー状態を表示するか', 'fr-FR': 'Affiche un état d\'erreur', 'de-DE': 'Zeigt den Fehlerzustand', 'es-ES': 'Si muestra estado de error' },
    },
  },
  checkbox: {
    description: {
      'en-US': 'Checkbox supporting an indeterminate state.',
      'ja-JP': '不確定状態に対応したチェックボックス。',
      'fr-FR': 'Case à cocher prenant en charge un état intermédiaire.',
      'de-DE': 'Kontrollkästchen mit unbestimmtem Zustand.',
      'es-ES': 'Casilla de verificación con estado indeterminado.',
    },
    props: {
      label: { 'en-US': 'Checkbox label', 'ja-JP': 'チェックボックスのラベル', 'fr-FR': 'Libellé de la case', 'de-DE': 'Kontrollkästchen-Label', 'es-ES': 'Etiqueta de la casilla' },
      checked: { 'en-US': 'Whether it is checked', 'ja-JP': 'チェックされているか', 'fr-FR': 'Indique si coché', 'de-DE': 'Ob aktiviert', 'es-ES': 'Si está marcado' },
      indeterminate: { 'en-US': 'Indeterminate state', 'ja-JP': '不確定状態', 'fr-FR': 'État intermédiaire', 'de-DE': 'Unbestimmter Zustand', 'es-ES': 'Estado indeterminado' },
      color: { 'en-US': 'Color when checked', 'ja-JP': 'チェック時の色', 'fr-FR': 'Couleur lorsque coché', 'de-DE': 'Farbe wenn aktiviert', 'es-ES': 'Color al marcar' },
      disabled: { 'en-US': 'Whether the button is disabled', 'ja-JP': '無効にするかどうか', 'fr-FR': 'Indique si le bouton est désactivé', 'de-DE': 'Ob der Button deaktiviert ist', 'es-ES': 'Si el botón está deshabilitado' },
    },
  },
  radio: {
    description: {
      'en-US': 'Radio button for mutually exclusive choices.',
      'ja-JP': '排他選択用のラジオボタン。',
      'fr-FR': 'Bouton radio pour des choix mutuellement exclusifs.',
      'de-DE': 'Optionsfeld für sich gegenseitig ausschließende Auswahl.',
      'es-ES': 'Botón de opción para elecciones mutuamente excluyentes.',
    },
    props: {
      label: { 'en-US': 'Radio label', 'ja-JP': 'ラジオのラベル', 'fr-FR': 'Libellé du bouton radio', 'de-DE': 'Optionsfeld-Label', 'es-ES': 'Etiqueta del botón de opción' },
      value: { 'en-US': 'Option value', 'ja-JP': 'オプションの値', 'fr-FR': 'Valeur de l\'option', 'de-DE': 'Optionswert', 'es-ES': 'Valor de la opción' },
      checked: { 'en-US': 'Whether it is checked', 'ja-JP': 'チェックされているか', 'fr-FR': 'Indique si coché', 'de-DE': 'Ob aktiviert', 'es-ES': 'Si está marcado' },
      color: { 'en-US': 'Color when checked', 'ja-JP': 'チェック時の色', 'fr-FR': 'Couleur lorsque coché', 'de-DE': 'Farbe wenn aktiviert', 'es-ES': 'Color al marcar' },
      disabled: { 'en-US': 'Whether the button is disabled', 'ja-JP': '無効にするかどうか', 'fr-FR': 'Indique si le bouton est désactivé', 'de-DE': 'Ob der Button deaktiviert ist', 'es-ES': 'Si el botón está deshabilitado' },
    },
  },
  switch: {
    description: {
      'en-US': 'Toggle switch for binary on/off states.',
      'ja-JP': 'オン/オフの二値状態用のトグルスイッチ。',
      'fr-FR': 'Interrupteur pour les états binaires activé/désactivé.',
      'de-DE': 'Umschalter für binäre Ein/Aus-Zustände.',
      'es-ES': 'Conmutador para estados binarios activado/desactivado.',
    },
    props: {
      checked: { 'en-US': 'Whether it is on', 'ja-JP': 'オンかどうか', 'fr-FR': 'Indique si activé', 'de-DE': 'Ob eingeschaltet', 'es-ES': 'Si está activado' },
      size: { 'en-US': 'Switch size', 'ja-JP': 'スイッチのサイズ', 'fr-FR': 'Taille de l\'interrupteur', 'de-DE': 'Schaltergröße', 'es-ES': 'Tamaño del conmutador' },
      color: { 'en-US': 'Color when on', 'ja-JP': 'オン時の色', 'fr-FR': 'Couleur lorsque activé', 'de-DE': 'Farbe wenn eingeschaltet', 'es-ES': 'Color al activar' },
      label: { 'en-US': 'Switch label', 'ja-JP': 'スイッチのラベル', 'fr-FR': 'Libellé de l\'interrupteur', 'de-DE': 'Schalter-Label', 'es-ES': 'Etiqueta del conmutador' },
      disabled: { 'en-US': 'Whether the button is disabled', 'ja-JP': '無効にするかどうか', 'fr-FR': 'Indique si le bouton est désactivé', 'de-DE': 'Ob der Button deaktiviert ist', 'es-ES': 'Si el botón está deshabilitado' },
    },
  },
  slider: {
    description: {
      'en-US': 'Slider supporting single value, range and ticks.',
      'ja-JP': '単一値、範囲、目盛りに対応したスライダー。',
      'fr-FR': 'Curseur prenant en charge valeur unique, plage et graduations.',
      'de-DE': 'Schieberegler mit Einzelwert, Bereich und Markierungen.',
      'es-ES': 'Deslizador con valor único, rango y marcas.',
    },
    props: {
      value: { 'en-US': 'Current value', 'ja-JP': '現在の値', 'fr-FR': 'Valeur actuelle', 'de-DE': 'Aktueller Wert', 'es-ES': 'Valor actual' },
      min: { 'en-US': 'Minimum value', 'ja-JP': '最小値', 'fr-FR': 'Valeur minimale', 'de-DE': 'Minimaler Wert', 'es-ES': 'Valor mínimo' },
      max: { 'en-US': 'Maximum value', 'ja-JP': '最大値', 'fr-FR': 'Valeur maximale', 'de-DE': 'Maximaler Wert', 'es-ES': 'Valor máximo' },
      step: { 'en-US': 'Step', 'ja-JP': 'ステップ', 'fr-FR': 'Pas', 'de-DE': 'Schrittweite', 'es-ES': 'Paso' },
      range: { 'en-US': 'Whether it is a range selection', 'ja-JP': '範囲選択か', 'fr-FR': 'Sélection de plage', 'de-DE': 'Bereichsauswahl', 'es-ES': 'Si es selección de rango' },
      marks: { 'en-US': 'Whether to show ticks', 'ja-JP': '目盛りを表示するか', 'fr-FR': 'Affiche les graduations', 'de-DE': 'Zeigt Markierungen', 'es-ES': 'Si muestra marcas' },
      disabled: { 'en-US': 'Whether the button is disabled', 'ja-JP': '無効にするかどうか', 'fr-FR': 'Indique si le bouton est désactivé', 'de-DE': 'Ob der Button deaktiviert ist', 'es-ES': 'Si el botón está deshabilitado' },
    },
  },
  datepicker: {
    description: {
      'en-US': 'Date picker supporting single date and date range.',
      'ja-JP': '単一の日付と日付範囲に対応した日付選択。',
      'fr-FR': 'Sélecteur de date pour une date unique ou une plage.',
      'de-DE': 'Datumsauswahl für einzelnes Datum und Datumsbereich.',
      'es-ES': 'Selector de fecha para una fecha o un rango.',
    },
    props: {
      label: { 'en-US': 'Label', 'ja-JP': 'ラベル', 'fr-FR': 'Libellé', 'de-DE': 'Label', 'es-ES': 'Etiqueta' },
      range: { 'en-US': 'Whether it is a range selection', 'ja-JP': '範囲選択か', 'fr-FR': 'Sélection de plage', 'de-DE': 'Bereichsauswahl', 'es-ES': 'Si es selección de rango' },
      format: { 'en-US': 'Date format', 'ja-JP': '日付の書式', 'fr-FR': 'Format de date', 'de-DE': 'Datumsformat', 'es-ES': 'Formato de fecha' },
      disableFuture: { 'en-US': 'Disable future dates', 'ja-JP': '未来の日付を無効化', 'fr-FR': 'Désactive les dates futures', 'de-DE': 'Zukünftige Daten deaktivieren', 'es-ES': 'Deshabilita fechas futuras' },
    },
  },
  colorpicker: {
    description: {
      'en-US': 'Color picker with preset palettes and custom colors.',
      'ja-JP': 'プリセットパレットとカスタムカラーに対応したカラーピッカー。',
      'fr-FR': 'Sélecteur de couleur avec palettes prédéfinies et couleurs personnalisées.',
      'de-DE': 'Farbwähler mit voreingestellten Paletten und benutzerdefinierten Farben.',
      'es-ES': 'Selector de color con paletas predefinidas y colores personalizados.',
    },
    props: {
      value: { 'en-US': 'Current color value', 'ja-JP': '現在の色値', 'fr-FR': 'Valeur de couleur actuelle', 'de-DE': 'Aktueller Farbwert', 'es-ES': 'Valor de color actual' },
      presets: { 'en-US': 'Preset colors array', 'ja-JP': 'プリセットカラーの配列', 'fr-FR': 'Tableau de couleurs prédéfinies', 'de-DE': 'Array mit Voreinstellungsfarben', 'es-ES': 'Array de colores predefinidos' },
      alpha: { 'en-US': 'Whether transparency is supported', 'ja-JP': '透明度をサポートするか', 'fr-FR': 'Prend en charge la transparence', 'de-DE': 'Unterstützt Transparenz', 'es-ES': 'Si admite transparencia' },
      label: { 'en-US': 'Label', 'ja-JP': 'ラベル', 'fr-FR': 'Libellé', 'de-DE': 'Label', 'es-ES': 'Etiqueta' },
    },
  },
  fileinput: {
    description: {
      'en-US': 'File upload input with drag-and-drop support.',
      'ja-JP': 'ドラッグ＆ドロップに対応したファイルアップロード入力。',
      'fr-FR': 'Entrée de téléversement de fichier avec glisser-déposer.',
      'de-DE': 'Datei-Upload-Eingabe mit Drag-and-Drop-Unterstützung.',
      'es-ES': 'Entrada de subida de archivos con arrastrar y soltar.',
    },
    props: {
      label: { 'en-US': 'Label', 'ja-JP': 'ラベル', 'fr-FR': 'Libellé', 'de-DE': 'Label', 'es-ES': 'Etiqueta' },
      accept: { 'en-US': 'Accepted file types', 'ja-JP': '許可するファイル型', 'fr-FR': 'Types de fichiers acceptés', 'de-DE': 'Akzeptierte Dateitypen', 'es-ES': 'Tipos de archivo aceptados' },
      multiple: { 'en-US': 'Whether multiple files are allowed', 'ja-JP': '複数ファイルを許可するか', 'fr-FR': 'Plusieurs fichiers autorisés', 'de-DE': 'Mehrere Dateien erlaubt', 'es-ES': 'Si permite varios archivos' },
      dragDrop: { 'en-US': 'Whether drag-and-drop is supported', 'ja-JP': 'ドラッグ＆ドロップをサポートするか', 'fr-FR': 'Glisser-déposer pris en charge', 'de-DE': 'Drag-and-Drop unterstützt', 'es-ES': 'Si admite arrastrar y soltar' },
      maxSize: { 'en-US': 'Maximum file size (MB)', 'ja-JP': '最大ファイルサイズ(MB)', 'fr-FR': 'Taille max. du fichier (Mo)', 'de-DE': 'Maximale Dateigröße (MB)', 'es-ES': 'Tamaño máximo de archivo (MB)' },
    },
  },
  autocomplete: {
    description: {
      'en-US': 'Autocomplete input with async loading support.',
      'ja-JP': '非同期読み込みに対応したオートコンプリート入力。',
      'fr-FR': 'Saisie auto-complétion avec chargement asynchrone.',
      'de-DE': 'Autovervollständigung mit asynchronem Laden.',
      'es-ES': 'Entrada de autocompletado con carga asíncrona.',
    },
    props: {
      options: { 'en-US': 'Candidate options', 'ja-JP': '候補項目', 'fr-FR': 'Options candidates', 'de-DE': 'Kandidatenoptionen', 'es-ES': 'Opciones candidatas' },
      multiple: { 'en-US': 'Whether multiple selection is allowed', 'ja-JP': '複数選択を許可するか', 'fr-FR': 'Sélection multiple autorisée', 'de-DE': 'Mehrfachauswahl erlaubt', 'es-ES': 'Si permite selección múltiple' },
      async: { 'en-US': 'Async loading function', 'ja-JP': '非同期読み込み関数', 'fr-FR': 'Fonction de chargement asynchrone', 'de-DE': 'Asynchrone Lade-Funktion', 'es-ES': 'Función de carga asíncrona' },
      label: { 'en-US': 'Label', 'ja-JP': 'ラベル', 'fr-FR': 'Libellé', 'de-DE': 'Label', 'es-ES': 'Etiqueta' },
    },
  },
  rating: {
    description: {
      'en-US': 'Rating component with half-star and custom icons.',
      'ja-JP': '半星とカスタムアイコンに対応した評価コンポーネント。',
      'fr-FR': 'Composant de notation avec demi-étoile et icônes personnalisées.',
      'de-DE': 'Bewertungskomponente mit Halbsternen und benutzerdefinierten Icons.',
      'es-ES': 'Componente de valoración con media estrella e iconos personalizados.',
    },
    props: {
      value: { 'en-US': 'Current rating', 'ja-JP': '現在の評価', 'fr-FR': 'Note actuelle', 'de-DE': 'Aktuelle Bewertung', 'es-ES': 'Valoración actual' },
      max: { 'en-US': 'Maximum number of stars', 'ja-JP': '最大星数', 'fr-FR': 'Nombre max. d\'étoiles', 'de-DE': 'Maximale Sternanzahl', 'es-ES': 'Número máximo de estrellas' },
      precision: { 'en-US': 'Precision (0.5 for half-star)', 'ja-JP': '精度(0.5 で半星)', 'fr-FR': 'Précision (0.5 pour demi-étoile)', 'de-DE': 'Präzision (0.5 für Halbsterne)', 'es-ES': 'Precisión (0.5 para media estrella)' },
      icon: { 'en-US': 'Custom icon', 'ja-JP': 'カスタムアイコン', 'fr-FR': 'Icône personnalisée', 'de-DE': 'Benutzerdefiniertes Icon', 'es-ES': 'Icono personalizado' },
      readonly: { 'en-US': 'Read-only mode', 'ja-JP': '読み取り専用モード', 'fr-FR': 'Mode lecture seule', 'de-DE': 'Nur-Lese-Modus', 'es-ES': 'Modo de solo lectura' },
    },
  },
  formcontrol: {
    description: {
      'en-US': 'Form control wrapper providing label and error context.',
      'ja-JP': 'ラベルとエラーコンテキストを提供するフォームコントロールのラッパー。',
      'fr-FR': 'Conteneur de contrôle de formulaire fournissant label et contexte d\'erreur.',
      'de-DE': 'Formularsteuerungs-Wrapper mit Label und Fehlerkontext.',
      'es-ES': 'Contenedor de control de formulario con etiqueta y contexto de error.',
    },
    props: {
      label: { 'en-US': 'Form label', 'ja-JP': 'フォームのラベル', 'fr-FR': 'Libellé du formulaire', 'de-DE': 'Formularlabel', 'es-ES': 'Etiqueta del formulario' },
      error: { 'en-US': 'Whether it is in error state', 'ja-JP': 'エラー状態かどうか', 'fr-FR': 'Indique si en état d\'erreur', 'de-DE': 'Ob im Fehlerzustand', 'es-ES': 'Si está en estado de error' },
      required: { 'en-US': 'Whether it is required', 'ja-JP': '必須かどうか', 'fr-FR': 'Indique si requis', 'de-DE': 'Ob erforderlich', 'es-ES': 'Si es obligatorio' },
      disabled: { 'en-US': 'Whether it is disabled', 'ja-JP': '無効にするかどうか', 'fr-FR': 'Indique si désactivé', 'de-DE': 'Ob deaktiviert', 'es-ES': 'Si está deshabilitado' },
    },
  },
  formgroup: {
    description: {
      'en-US': 'Form grouping container to arrange related controls.',
      'ja-JP': '関連するコントロールを配置するためのフォームグループコンテナ。',
      'fr-FR': 'Conteneur de groupe de formulaire pour disposer les contrôles associés.',
      'de-DE': 'Formulargruppen-Container zum Anordnen zusammengehöriger Steuerelemente.',
      'es-ES': 'Contenedor de grupo de formulario para disponer controles relacionados.',
    },
    props: {
      row: { 'en-US': 'Whether to arrange horizontally', 'ja-JP': '横向きに配置するか', 'fr-FR': 'Disposition horizontale', 'de-DE': 'Horizontal anordnen', 'es-ES': 'Si se dispone horizontalmente' },
      disabled: { 'en-US': 'Whether the whole group is disabled', 'ja-JP': 'グループ全体を無効にするか', 'fr-FR': 'Désactive tout le groupe', 'de-DE': 'Gesamte Gruppe deaktiviert', 'es-ES': 'Si se deshabilita todo el grupo' },
    },
  },
  formhelpertext: {
    description: {
      'en-US': 'Form helper text, often used for error messages.',
      'ja-JP': 'エラーメッセージなどによく使われるフォーム補助テキスト。',
      'fr-FR': 'Texte d\'aide de formulaire, souvent utilisé pour les erreurs.',
      'de-DE': 'Formular-Hilfstext, oft für Fehlermeldungen verwendet.',
      'es-ES': 'Texto de ayuda del formulario, usado a menudo para errores.',
    },
    props: {
      error: { 'en-US': 'Whether to use error-state styling', 'ja-JP': 'エラー状態のスタイルを使うか', 'fr-FR': 'Style d\'état d\'erreur', 'de-DE': 'Fehlerzustand-Stil', 'es-ES': 'Estilo de estado de error' },
      disabled: { 'en-US': 'Whether to use disabled styling', 'ja-JP': '無効スタイルを使うか', 'fr-FR': 'Style désactivé', 'de-DE': 'Deaktivierter Stil', 'es-ES': 'Estilo deshabilitado' },
    },
  },
  container: {
    description: {
      'en-US': 'Responsive centered container that constrains max width.',
      'ja-JP': '最大幅を制限するレスポンシブな中央揃えコンテナ。',
      'fr-FR': 'Conteneur centré responsive limitant la largeur maximale.',
      'de-DE': 'Responsiver zentrierter Container, der die maximale Breite begrenzt.',
      'es-ES': 'Contenedor centrado responsive que limita el ancho máximo.',
    },
    props: {
      maxWidth: { 'en-US': 'Max width breakpoint', 'ja-JP': '最大幅のブレークポイント', 'fr-FR': 'Point de rupture de largeur max', 'de-DE': 'Maximale Breiten-Stufe', 'es-ES': 'Punto de ruptura de ancho máximo' },
      centered: { 'en-US': 'Whether to center horizontally', 'ja-JP': '水平中央揃えにするか', 'fr-FR': 'Centré horizontalement', 'de-DE': 'Horizontal zentriert', 'es-ES': 'Si se centra horizontalmente' },
      fixed: { 'en-US': 'Whether width is fixed', 'ja-JP': '幅を固定するか', 'fr-FR': 'Largeur fixe', 'de-DE': 'Feste Breite', 'es-ES': 'Si el ancho es fijo' },
    },
  },
  box: {
    description: {
      'en-US': 'Generic box component supporting flex/grid layout.',
      'ja-JP': 'flex/grid レイアウトに対応した汎用ボックスコンポーネント。',
      'fr-FR': 'Composant boîte générique prenant en charge flex/grid.',
      'de-DE': 'Generische Box-Komponente mit flex/grid-Layout.',
      'es-ES': 'Componente caja genérico con diseño flex/grid.',
    },
    props: {
      display: { 'en-US': 'Display method', 'ja-JP': '表示方式', 'fr-FR': 'Mode d\'affichage', 'de-DE': 'Anzeigeart', 'es-ES': 'Modo de visualización' },
      gap: { 'en-US': 'Gap between child elements', 'ja-JP': '子要素の間隔', 'fr-FR': 'Espacement entre les enfants', 'de-DE': 'Abstand zwischen Kindelementen', 'es-ES': 'Espacio entre elementos hijos' },
      padding: { 'en-US': 'Inner padding', 'ja-JP': '内側の余白', 'fr-FR': 'Marge intérieure', 'de-DE': 'Innenabstand', 'es-ES': 'Relleno interno' },
      className: { 'en-US': 'Custom class name', 'ja-JP': 'カスタムクラス名', 'fr-FR': 'Nom de classe personnalisé', 'de-DE': 'Benutzerdefinierter Klassenname', 'es-ES': 'Nombre de clase personalizado' },
    },
  },
  grid: {
    description: {
      'en-US': 'Grid layout container with responsive column counts.',
      'ja-JP': 'レスポンシブな列数を持つグリッドレイアウトコンテナ。',
      'fr-FR': 'Conteneur de grille responsive avec nombre de colonnes adaptatif.',
      'de-DE': 'Raster-Layout-Container mit responsiver Spaltenzahl.',
      'es-ES': 'Contenedor de cuadrícula responsive con columnas adaptativas.',
    },
    props: {
      columns: { 'en-US': 'Column count configuration', 'ja-JP': '列数の設定', 'fr-FR': 'Configuration du nombre de colonnes', 'de-DE': 'Spaltenanzahl-Konfiguration', 'es-ES': 'Configuración del número de columnas' },
      gap: { 'en-US': 'Grid gap', 'ja-JP': 'グリッドの間隔', 'fr-FR': 'Espacement de la grille', 'de-DE': 'Raster-Abstand', 'es-ES': 'Espaciado de la cuadrícula' },
      container: { 'en-US': 'Whether to wrap in a container', 'ja-JP': 'コンテナで包むか', 'fr-FR': 'Enveloppé dans un conteneur', 'de-DE': 'In Container wrappen', 'es-ES': 'Si se envuelve en un contenedor' },
    },
  },
  paper: {
    description: {
      'en-US': 'Paper container providing background and optional elevation.',
      'ja-JP': '背景とオプションの影を提供するペーパーコンテナ。',
      'fr-FR': 'Conteneur papier fournissant un fond et une élévation optionnelle.',
      'de-DE': 'Papier-Container mit Hintergrund und optionaler Erhöhung.',
      'es-ES': 'Contenedor papel con fondo y elevación opcional.',
    },
    props: {
      elevation: { 'en-US': 'Elevation level (0-5)', 'ja-JP': '影の段階(0-5)', 'fr-FR': 'Niveau d\'élévation (0-5)', 'de-DE': 'Erhebungsstufe (0-5)', 'es-ES': 'Nivel de elevación (0-5)' },
      square: { 'en-US': 'Whether to use square corners', 'ja-JP': '角丸を使わないか', 'fr-FR': 'Coins non arrondis', 'de-DE': 'Eckig (keine Rundung)', 'es-ES': 'Si usa esquinas cuadradas' },
      outlined: { 'en-US': 'Whether to use a border instead of shadow', 'ja-JP': '影の代わりに枠線を使うか', 'fr-FR': 'Bordure au lieu d\'ombre', 'de-DE': 'Rand statt Schatten', 'es-ES': 'Si usa borde en lugar de sombra' },
    },
  },
  appbar: {
    description: {
      'en-US': 'Application top bar for titles and actions.',
      'ja-JP': 'タイトルとアクションを配置するアプリケーショントップバー。',
      'fr-FR': 'Barre supérieure d\'application pour titres et actions.',
      'de-DE': 'Anwendungs-Topbar für Titel und Aktionen.',
      'es-ES': 'Barra superior de la aplicación para títulos y acciones.',
    },
    props: {
      position: { 'en-US': 'Positioning method', 'ja-JP': '配置方法', 'fr-FR': 'Méthode de positionnement', 'de-DE': 'Positionierungsart', 'es-ES': 'Método de posicionamiento' },
      color: { 'en-US': 'Background color', 'ja-JP': '背景色', 'fr-FR': 'Couleur de fond', 'de-DE': 'Hintergrundfarbe', 'es-ES': 'Color de fondo' },
      dense: { 'en-US': 'Whether compact mode is used', 'ja-JP': 'コンパクトモードか', 'fr-FR': 'Mode compact', 'de-DE': 'Kompaktmodus', 'es-ES': 'Si usa modo compacto' },
      title: { 'en-US': 'Section title', 'ja-JP': 'セクションのタイトル', 'fr-FR': 'Titre de la section', 'de-DE': 'Abschnittstitel', 'es-ES': 'Título de la sección' },
    },
  },
  toolbar: {
    description: {
      'en-US': 'Toolbar for arranging action buttons.',
      'ja-JP': 'アクションボタンを配置するツールバー。',
      'fr-FR': 'Barre d\'outils pour disposer les boutons d\'action.',
      'de-DE': 'Werkzeugleiste zum Anordnen von Aktionsbuttons.',
      'es-ES': 'Barra de herramientas para disponer botones de acción.',
    },
    props: {
      variant: { 'en-US': 'Toolbar density', 'ja-JP': 'ツールバーの密度', 'fr-FR': 'Densité de la barre d\'outils', 'de-DE': 'Werkzeugleisten-Dichte', 'es-ES': 'Densidad de la barra de herramientas' },
      disableGutters: { 'en-US': 'Whether to remove left/right padding', 'ja-JP': '左右の余白を除去するか', 'fr-FR': 'Retire la marge gauche/droite', 'de-DE': 'Entfernt linken/rechten Innenabstand', 'es-ES': 'Si elimina el relleno izquierdo/derecho' },
    },
  },
  menu: {
    description: {
      'en-US': 'Menu component with dropdown and context menus.',
      'ja-JP': 'ドロップダウンと右クリックメニューに対応したメニュー。',
      'fr-FR': 'Composant menu avec menus déroulants et contextuels.',
      'de-DE': 'Menü-Komponente mit Dropdown- und Kontextmenüs.',
      'es-ES': 'Componente de menú con desplegables y menús contextuales.',
    },
    props: {
      anchorEl: { 'en-US': 'Anchor element', 'ja-JP': 'アンカー要素', 'fr-FR': 'Élément d\'ancrage', 'de-DE': 'Ankerelement', 'es-ES': 'Elemento ancla' },
      open: { 'en-US': 'Whether it is open', 'ja-JP': '開いているか', 'fr-FR': 'Indique si ouvert', 'de-DE': 'Ob geöffnet', 'es-ES': 'Si está abierto' },
      onClose: { 'en-US': 'Close callback', 'ja-JP': '閉じるコールバック', 'fr-FR': 'Rappel de fermeture', 'de-DE': 'Schließen-Callback', 'es-ES': 'Callback de cierre' },
      placement: { 'en-US': 'Popup placement', 'ja-JP': 'ポップアップの位置', 'fr-FR': 'Position du menu', 'de-DE': 'Pop-up-Position', 'es-ES': 'Posición del menú' },
    },
  },
  tabs: {
    description: {
      'en-US': 'Tabs component supporting horizontal/vertical and scrollable.',
      'ja-JP': '横向き/縦向きとスクロールに対応したタブ。',
      'fr-FR': 'Composant onglets prenant en charge horizontal/vertical et défilement.',
      'de-DE': 'Tabs-Komponente mit horizontal/vertikal und scrollbar.',
      'es-ES': 'Componente de pestañas con horizontal/vertical y desplazable.',
    },
    props: {
      value: { 'en-US': 'Index of the active tab', 'ja-JP': 'アクティブなタブのインデックス', 'fr-FR': 'Index de l\'onglet actif', 'de-DE': 'Index des aktiven Tabs', 'es-ES': 'Índice de la pestaña activa' },
      onChange: { 'en-US': 'Change callback', 'ja-JP': '切り替えコールバック', 'fr-FR': 'Rappel de changement', 'de-DE': 'Wechsel-Callback', 'es-ES': 'Callback de cambio' },
      orientation: { 'en-US': 'Arrangement direction', 'ja-JP': '配置方向', 'fr-FR': 'Orientation', 'de-DE': 'Ausrichtung', 'es-ES': 'Orientación' },
      scrollable: { 'en-US': 'Whether it is scrollable', 'ja-JP': 'スクロール可能か', 'fr-FR': 'Défilement possible', 'de-DE': 'Scrollbar', 'es-ES': 'Si es desplazable' },
      variant: { 'en-US': 'Visual variant', 'ja-JP': '視覚的なバリエーション', 'fr-FR': 'Variante visuelle', 'de-DE': 'Visuelle Variante', 'es-ES': 'Variante visual' },
    },
  },
  breadcrumb: {
    description: {
      'en-US': 'Breadcrumb navigation showing the current path.',
      'ja-JP': '現在のパスを表示するパンくずリストナビ。',
      'fr-FR': 'Fil d\'Ariane montrant le chemin actuel.',
      'de-DE': 'Brotkrümel-Navigation zeigt den aktuellen Pfad.',
      'es-ES': 'Navegación de migas de pan mostrando la ruta actual.',
    },
    props: {
      separator: { 'en-US': 'Separator', 'ja-JP': '区切り文字', 'fr-FR': 'Séparateur', 'de-DE': 'Trennzeichen', 'es-ES': 'Separador' },
      maxItems: { 'en-US': 'Maximum number of items shown', 'ja-JP': '表示する最大項目数', 'fr-FR': 'Nombre max. d\'éléments affichés', 'de-DE': 'Maximale angezeigte Elemente', 'es-ES': 'Número máximo de elementos mostrados' },
      itemsAfterCollapse: { 'en-US': 'Items shown at the end after collapse', 'ja-JP': '折りたたみ後に末尾に表示する項目数', 'fr-FR': 'Éléments affichés à la fin après réduction', 'de-DE': 'Elemente am Ende nach Einklappen', 'es-ES': 'Elementos al final tras colapsar' },
    },
  },
  pagination: {
    description: {
      'en-US': 'Pagination control for navigating data pages.',
      'ja-JP': 'データページを移動するページネーション。',
      'fr-FR': 'Pagination pour naviguer dans les pages de données.',
      'de-DE': 'Paginierung zur Navigation durch Datenseiten.',
      'es-ES': 'Paginación para navegar por páginas de datos.',
    },
    props: {
      count: { 'en-US': 'Total number of pages', 'ja-JP': '総ページ数', 'fr-FR': 'Nombre total de pages', 'de-DE': 'Gesamtzahl der Seiten', 'es-ES': 'Número total de páginas' },
      page: { 'en-US': 'Current page', 'ja-JP': '現在のページ', 'fr-FR': 'Page actuelle', 'de-DE': 'Aktuelle Seite', 'es-ES': 'Página actual' },
      shape: { 'en-US': 'Button shape', 'ja-JP': 'ボタンの形状', 'fr-FR': 'Forme du bouton', 'de-DE': 'Button-Form', 'es-ES': 'Forma del botón' },
      size: { 'en-US': 'Size', 'ja-JP': 'サイズ', 'fr-FR': 'Taille', 'de-DE': 'Größe', 'es-ES': 'Tamaño' },
      onChange: { 'en-US': 'Page change callback', 'ja-JP': 'ページ変更コールバック', 'fr-FR': 'Rappel de changement de page', 'de-DE': 'Seitenwechsel-Callback', 'es-ES': 'Callback de cambio de página' },
    },
  },
  alert: {
    description: {
      'en-US': 'Alert bar for important information feedback.',
      'ja-JP': '重要な情報を伝える警告バー。',
      'fr-FR': 'Barre d\'alerte pour les informations importantes.',
      'de-DE': 'Warnleiste für wichtige Informationen.',
      'es-ES': 'Barra de alerta para información importante.',
    },
    props: {
      severity: { 'en-US': 'Severity level', 'ja-JP': '重要度レベル', 'fr-FR': 'Niveau de gravité', 'de-DE': 'Schweregrad', 'es-ES': 'Nivel de gravedad' },
      variant: { 'en-US': 'Visual variant', 'ja-JP': '視覚的なバリエーション', 'fr-FR': 'Variante visuelle', 'de-DE': 'Visuelle Variante', 'es-ES': 'Variante visual' },
      title: { 'en-US': 'Title', 'ja-JP': 'タイトル', 'fr-FR': 'Titre', 'de-DE': 'Titel', 'es-ES': 'Título' },
      action: { 'en-US': 'Action area on the right', 'ja-JP': '右側のアクション領域', 'fr-FR': 'Zone d\'action à droite', 'de-DE': 'Aktionsbereich rechts', 'es-ES': 'Área de acción a la derecha' },
      closable: { 'en-US': 'Whether it can be closed', 'ja-JP': '閉じることができるか', 'fr-FR': 'Fermable', 'de-DE': 'Schließbar', 'es-ES': 'Si se puede cerrar' },
    },
  },
  snackbar: {
    description: {
      'en-US': 'Lightweight message bar that auto-dismisses.',
      'ja-JP': '自動で消える軽量メッセージバー。',
      'fr-FR': 'Barre de message légère qui disparaît automatiquement.',
      'de-DE': 'Leichtgewichtige Nachrichtenleiste, die automatisch verschwindet.',
      'es-ES': 'Barra de mensaje ligera que se oculta automáticamente.',
    },
    props: {
      open: { 'en-US': 'Whether it is shown', 'ja-JP': '表示するか', 'fr-FR': 'Indique si affiché', 'de-DE': 'Ob angezeigt', 'es-ES': 'Si se muestra' },
      message: { 'en-US': 'Message content', 'ja-JP': 'メッセージ内容', 'fr-FR': 'Contenu du message', 'de-DE': 'Nachrichteninhalt', 'es-ES': 'Contenido del mensaje' },
      autoHideDuration: { 'en-US': 'Auto-hide duration (ms)', 'ja-JP': '自動非表示のミリ秒', 'fr-FR': 'Durée de masquage auto (ms)', 'de-DE': 'Auto-Ausblenddauer (ms)', 'es-ES': 'Duración de ocultación automática (ms)' },
      anchorOrigin: { 'en-US': 'Origin position', 'ja-JP': '表示位置', 'fr-FR': 'Position d\'origine', 'de-DE': 'Ursprungsposition', 'es-ES': 'Posición de origen' },
      action: { 'en-US': 'Action button', 'ja-JP': 'アクションボタン', 'fr-FR': 'Bouton d\'action', 'de-DE': 'Aktionsbutton', 'es-ES': 'Botón de acción' },
    },
  },
  modal: {
    description: {
      'en-US': 'Modal dialog for focused interaction.',
      'ja-JP': 'フォーカスした操作のためのモーダルダイアログ。',
      'fr-FR': 'Boîte de dialogue modale pour une interaction ciblée.',
      'de-DE': 'Modales Dialogfeld für fokussierte Interaktion.',
      'es-ES': 'Cuadro de diálogo modal para interacción enfocada.',
    },
    props: {
      open: { 'en-US': 'Whether it is open', 'ja-JP': '開いているか', 'fr-FR': 'Indique si ouvert', 'de-DE': 'Ob geöffnet', 'es-ES': 'Si está abierto' },
      onClose: { 'en-US': 'Close callback', 'ja-JP': '閉じるコールバック', 'fr-FR': 'Rappel de fermeture', 'de-DE': 'Schließen-Callback', 'es-ES': 'Callback de cierre' },
      size: { 'en-US': 'Dialog size', 'ja-JP': 'ダイアログのサイズ', 'fr-FR': 'Taille de la boîte de dialogue', 'de-DE': 'Dialoggröße', 'es-ES': 'Tamaño del diálogo' },
      fullScreen: { 'en-US': 'Whether it is full screen', 'ja-JP': '全画面か', 'fr-FR': 'Plein écran', 'de-DE': 'Vollbild', 'es-ES': 'Si es pantalla completa' },
      closeOnBackdrop: { 'en-US': 'Close on backdrop click', 'ja-JP': '背景クリックで閉じる', 'fr-FR': 'Fermeture au clic sur le fond', 'de-DE': 'Schließen bei Klick auf Hintergrund', 'es-ES': 'Cerrar al hacer clic en el fondo' },
    },
  },
  tooltip: {
    description: {
      'en-US': 'Tooltip showing hints on hover.',
      'ja-JP': 'ホバー時にヒントを表示するツールチップ。',
      'fr-FR': 'Infobulle affichant une aide au survol.',
      'de-DE': 'Tooltip mit Hinweis beim Überfahren.',
      'es-ES': 'Información sobre herramientas al pasar el cursor.',
    },
    props: {
      title: { 'en-US': 'Tooltip content', 'ja-JP': 'ツールチップの内容', 'fr-FR': 'Contenu de l\'infobulle', 'de-DE': 'Tooltip-Inhalt', 'es-ES': 'Contenido del tooltip' },
      placement: { 'en-US': 'Placement direction', 'ja-JP': '表示方向', 'fr-FR': 'Direction d\'apparition', 'de-DE': 'Erscheinungsrichtung', 'es-ES': 'Dirección de aparición' },
      arrow: { 'en-US': 'Whether to show an arrow', 'ja-JP': '矢印を表示するか', 'fr-FR': 'Affiche une flèche', 'de-DE': 'Zeigt einen Pfeil', 'es-ES': 'Si muestra una flecha' },
      delay: { 'en-US': 'Show delay (ms)', 'ja-JP': '表示遅延(ミリ秒)', 'fr-FR': 'Délai d\'affichage (ms)', 'de-DE': 'Anzeigeverzögerung (ms)', 'es-ES': 'Retardo de visualización (ms)' },
    },
  },
  spinner: {
    description: {
      'en-US': 'Loading indicator with a small spinning animation.',
      'ja-JP': '小さな回転アニメーションのローディングインジケーター。',
      'fr-FR': 'Indicateur de chargement avec une petite animation rotative.',
      'de-DE': 'Ladeanzeige mit kleiner Drehanimation.',
      'es-ES': 'Indicador de carga con una pequeña animación giratoria.',
    },
    props: {
      size: { 'en-US': 'Size in pixels', 'ja-JP': 'サイズ(ピクセル)', 'fr-FR': 'Taille en pixels', 'de-DE': 'Größe in Pixeln', 'es-ES': 'Tamaño en píxeles' },
      color: { 'en-US': 'Color', 'ja-JP': '色', 'fr-FR': 'Couleur', 'de-DE': 'Farbe', 'es-ES': 'Color' },
      thickness: { 'en-US': 'Line thickness', 'ja-JP': '線の太さ', 'fr-FR': 'Épaisseur du trait', 'de-DE': 'Linienstärke', 'es-ES': 'Grosor de línea' },
    },
  },
  circularprogress: {
    description: {
      'en-US': 'Circular progress bar, determinate or indeterminate.',
      'ja-JP': '決定/不確定に対応した円形プログレスバー。',
      'fr-FR': 'Barre de progression circulaire, déterminée ou indéterminée.',
      'de-DE': 'Kreisförmige Fortschrittsanzeige, bestimmt oder unbestimmt.',
      'es-ES': 'Barra de progreso circular, determinada o indeterminada.',
    },
    props: {
      value: { 'en-US': 'Progress value (0-100); indeterminate if omitted', 'ja-JP': '進捗値(0-100)。省略時は不確定', 'fr-FR': 'Valeur (0-100); indéterminé si omis', 'de-DE': 'Fortschrittswert (0-100); unbestimmt wenn weggelassen', 'es-ES': 'Valor (0-100); indeterminado si se omite' },
      size: { 'en-US': 'Size in pixels', 'ja-JP': 'サイズ(ピクセル)', 'fr-FR': 'Taille en pixels', 'de-DE': 'Größe in Pixeln', 'es-ES': 'Tamaño en píxeles' },
      thickness: { 'en-US': 'Ring thickness', 'ja-JP': 'リングの太さ', 'fr-FR': 'Épaisseur de l\'anneau', 'de-DE': 'Ringstärke', 'es-ES': 'Grosor del anillo' },
      color: { 'en-US': 'Color', 'ja-JP': '色', 'fr-FR': 'Couleur', 'de-DE': 'Farbe', 'es-ES': 'Color' },
    },
  },
  progress: {
    description: {
      'en-US': 'Linear progress bar.',
      'ja-JP': '線形プログレスバー。',
      'fr-FR': 'Barre de progression linéaire.',
      'de-DE': 'Lineare Fortschrittsanzeige.',
      'es-ES': 'Barra de progreso lineal.',
    },
    props: {
      value: { 'en-US': 'Progress value (0-100)', 'ja-JP': '進捗値(0-100)', 'fr-FR': 'Valeur (0-100)', 'de-DE': 'Fortschrittswert (0-100)', 'es-ES': 'Valor (0-100)' },
      variant: { 'en-US': 'Variant', 'ja-JP': 'バリエーション', 'fr-FR': 'Variante', 'de-DE': 'Variante', 'es-ES': 'Variante' },
      bufferValue: { 'en-US': 'Buffer value (buffer mode)', 'ja-JP': 'バッファ値(バッファモード)', 'fr-FR': 'Valeur tampon (mode buffer)', 'de-DE': 'Pufferwert (Buffer-Modus)', 'es-ES': 'Valor de buffer (modo buffer)' },
      color: { 'en-US': 'Color', 'ja-JP': '色', 'fr-FR': 'Couleur', 'de-DE': 'Farbe', 'es-ES': 'Color' },
    },
  },
  skeleton: {
    description: {
      'en-US': 'Skeleton placeholder shown while loading.',
      'ja-JP': '読み込み中に表示するスケルトンプレースホルダー。',
      'fr-FR': 'Emplacement squelette affiché pendant le chargement.',
      'de-DE': 'Skeleton-Platzhalter während des Ladens.',
      'es-ES': 'Marcador de posición tipo esqueleto mientras carga.',
    },
    props: {
      variant: { 'en-US': 'Shape', 'ja-JP': '形状', 'fr-FR': 'Forme', 'de-DE': 'Form', 'es-ES': 'Forma' },
      width: { 'en-US': 'Width', 'ja-JP': '幅', 'fr-FR': 'Largeur', 'de-DE': 'Breite', 'es-ES': 'Ancho' },
      height: { 'en-US': 'Height', 'ja-JP': '高さ', 'fr-FR': 'Hauteur', 'de-DE': 'Höhe', 'es-ES': 'Alto' },
      animation: { 'en-US': 'Animation type', 'ja-JP': 'アニメーション種類', 'fr-FR': 'Type d\'animation', 'de-DE': 'Animationstyp', 'es-ES': 'Tipo de animación' },
    },
  },
  banner: {
    description: {
      'en-US': 'Banner alert, usually placed at the top of a page.',
      'ja-JP': 'ページ上部によく配置されるバナー通知。',
      'fr-FR': 'Bannière d\'alerte, généralement placée en haut de page.',
      'de-DE': 'Banner-Hinweis, meist oben auf der Seite.',
      'es-ES': 'Banner de aviso, normalmente en la parte superior de la página.',
    },
    props: {
      severity: { 'en-US': 'Severity level', 'ja-JP': '重要度レベル', 'fr-FR': 'Niveau de gravité', 'de-DE': 'Schweregrad', 'es-ES': 'Nivel de gravedad' },
      icon: { 'en-US': 'Icon on the left', 'ja-JP': '左側のアイコン', 'fr-FR': 'Icône à gauche', 'de-DE': 'Icon links', 'es-ES': 'Icono a la izquierda' },
      action: { 'en-US': 'Action area', 'ja-JP': 'アクション領域', 'fr-FR': 'Zone d\'action', 'de-DE': 'Aktionsbereich', 'es-ES': 'Área de acción' },
      onClose: { 'en-US': 'Close callback', 'ja-JP': '閉じるコールバック', 'fr-FR': 'Rappel de fermeture', 'de-DE': 'Schließen-Callback', 'es-ES': 'Callback de cierre' },
    },
  },
  typography: {
    description: {
      'en-US': 'Typography component for unified text hierarchy.',
      'ja-JP': '統一された文字階層のためのタイポグラフィ。',
      'fr-FR': 'Composant typographique pour une hiérarchie de texte uniforme.',
      'de-DE': 'Typografie-Komponente für einheitliche Text-Hierarchie.',
      'es-ES': 'Componente de tipografía para jerarquía de texto uniforme.',
    },
    props: {
      variant: { 'en-US': 'Text variant', 'ja-JP': '文字バリエーション', 'fr-FR': 'Variante de texte', 'de-DE': 'Textvariante', 'es-ES': 'Variante de texto' },
      color: { 'en-US': 'Text color', 'ja-JP': '文字の色', 'fr-FR': 'Couleur du texte', 'de-DE': 'Textfarbe', 'es-ES': 'Color de texto' },
      align: { 'en-US': 'Alignment', 'ja-JP': '配置', 'fr-FR': 'Alignement', 'de-DE': 'Ausrichtung', 'es-ES': 'Alineación' },
      gutterBottom: { 'en-US': 'Bottom margin', 'ja-JP': '下部の余白', 'fr-FR': 'Marge inférieure', 'de-DE': 'Unterer Außenabstand', 'es-ES': 'Margen inferior' },
    },
  },
  list: {
    description: {
      'en-US': 'List container that holds list items.',
      'ja-JP': 'リスト項目を保持するリストコンテナ。',
      'fr-FR': 'Conteneur de liste contenant les éléments de liste.',
      'de-DE': 'Listen-Container, der Listenelemente hält.',
      'es-ES': 'Contenedor de lista que contiene elementos.',
    },
    props: {
      dense: { 'en-US': 'Compact mode', 'ja-JP': 'コンパクトモード', 'fr-FR': 'Mode compact', 'de-DE': 'Kompaktmodus', 'es-ES': 'Modo compacto' },
      disablePadding: { 'en-US': 'Remove inner padding', 'ja-JP': '内側の余白を除去', 'fr-FR': 'Retire la marge intérieure', 'de-DE': 'Innenabstand entfernen', 'es-ES': 'Elimina el relleno interno' },
      ordered: { 'en-US': 'Whether it is an ordered list', 'ja-JP': '順序付きリストか', 'fr-FR': 'Liste ordonnée', 'de-DE': 'Geordnete Liste', 'es-ES': 'Si es una lista ordenada' },
    },
  },
  listitem: {
    description: {
      'en-US': 'List item that can contain icons and text.',
      'ja-JP': 'アイコンとテキストを含められるリスト項目。',
      'fr-FR': 'Élément de liste pouvant contenir icônes et texte.',
      'de-DE': 'Listenelement, das Icons und Text enthalten kann.',
      'es-ES': 'Elemento de lista que puede contener iconos y texto.',
    },
    props: {
      alignItems: { 'en-US': 'Vertical alignment', 'ja-JP': '垂直揃え', 'fr-FR': 'Alignement vertical', 'de-DE': 'Vertikale Ausrichtung', 'es-ES': 'Alineación vertical' },
      divider: { 'en-US': 'Whether to show a divider', 'ja-JP': '分割線を表示するか', 'fr-FR': 'Affiche un séparateur', 'de-DE': 'Zeigt eine Trennlinie', 'es-ES': 'Si muestra un divisor' },
      button: { 'en-US': 'Whether it is clickable', 'ja-JP': 'クリック可能か', 'fr-FR': 'Cliquable', 'de-DE': 'Klickbar', 'es-ES': 'Si es clicable' },
      selected: { 'en-US': 'Whether it is in selected state', 'ja-JP': '選択状態か', 'fr-FR': 'État sélectionné', 'de-DE': 'Ausgewählter Zustand', 'es-ES': 'Si está en estado seleccionado' },
    },
  },
  listitemtext: {
    description: {
      'en-US': 'List item text with primary and secondary lines.',
      'ja-JP': '主・副のテキストを持つリスト項目のテキスト。',
      'fr-FR': 'Texte d\'élément de liste avec lignes primaire et secondaire.',
      'de-DE': 'Listenelement-Text mit Haupt- und Nebenzeile.',
      'es-ES': 'Texto de elemento de lista con líneas principal y secundaria.',
    },
    props: {
      primary: { 'en-US': 'Primary text', 'ja-JP': '主テキスト', 'fr-FR': 'Texte principal', 'de-DE': 'Primärer Text', 'es-ES': 'Texto principal' },
      secondary: { 'en-US': 'Secondary text', 'ja-JP': '副テキスト', 'fr-FR': 'Texte secondaire', 'de-DE': 'Sekundärer Text', 'es-ES': 'Texto secundario' },
      disableTypography: { 'en-US': 'Whether to disable built-in typography', 'ja-JP': '内蔵タイポグラフィを無効にするか', 'fr-FR': 'Désactive la typographie intégrée', 'de-DE': 'Integrierte Typografie deaktivieren', 'es-ES': 'Si deshabilita la tipografía integrada' },
    },
  },
  listitemicon: {
    description: {
      'en-US': 'List item icon container.',
      'ja-JP': 'リスト項目のアイコンコンテナ。',
      'fr-FR': 'Conteneur d\'icône d\'élément de liste.',
      'de-DE': 'Listen-Icon-Container.',
      'es-ES': 'Contenedor de icono de elemento de lista.',
    },
    props: {
      alignItems: { 'en-US': 'Vertical alignment', 'ja-JP': '垂直揃え', 'fr-FR': 'Alignement vertical', 'de-DE': 'Vertikale Ausrichtung', 'es-ES': 'Alineación vertical' },
    },
  },
  table: {
    description: {
      'en-US': 'Data table with sorting and hover support.',
      'ja-JP': 'ソートとホバーに対応したデータテーブル。',
      'fr-FR': 'Table de données avec tri et survol.',
      'de-DE': 'Datentabelle mit Sortierung und Hover.',
      'es-ES': 'Tabla de datos con ordenación y hover.',
    },
    props: {
      striped: { 'en-US': 'Whether to use zebra stripes', 'ja-JP': 'ゼブラ柄にするか', 'fr-FR': 'Lignes zébrées', 'de-DE': 'Zebranstreifen', 'es-ES': 'Si usa rayas de cebra' },
      hoverable: { 'en-US': 'Whether to highlight on hover', 'ja-JP': 'ホバーで強調するか', 'fr-FR': 'Surbrillance au survol', 'de-DE': 'Hervorhebung beim Überfahren', 'es-ES': 'Si resalta al pasar el cursor' },
      dense: { 'en-US': 'Compact mode', 'ja-JP': 'コンパクトモード', 'fr-FR': 'Mode compact', 'de-DE': 'Kompaktmodus', 'es-ES': 'Modo compacto' },
      sortable: { 'en-US': 'Whether it is sortable', 'ja-JP': 'ソート可能か', 'fr-FR': 'Triable', 'de-DE': 'Sortierbar', 'es-ES': 'Si es ordenable' },
    },
  },
  avatar: {
    description: {
      'en-US': 'Avatar supporting images, text and combinations.',
      'ja-JP': '画像、文字、組み合わせに対応したアバター。',
      'fr-FR': 'Avatar prenant en charge images, texte et combinaisons.',
      'de-DE': 'Avatar mit Bildern, Text und Kombinationen.',
      'es-ES': 'Avatar con imágenes, texto y combinaciones.',
    },
    props: {
      src: { 'en-US': 'Image URL', 'ja-JP': '画像のURL', 'fr-FR': 'URL de l\'image', 'de-DE': 'Bild-URL', 'es-ES': 'URL de la imagen' },
      alt: { 'en-US': 'Alt text', 'ja-JP': '代替テキスト', 'fr-FR': 'Texte alternatif', 'de-DE': 'Alternativtext', 'es-ES': 'Texto alternativo' },
      size: { 'en-US': 'Size', 'ja-JP': 'サイズ', 'fr-FR': 'Taille', 'de-DE': 'Größe', 'es-ES': 'Tamaño' },
      shape: { 'en-US': 'Shape', 'ja-JP': '形状', 'fr-FR': 'Forme', 'de-DE': 'Form', 'es-ES': 'Forma' },
      badge: { 'en-US': 'Badge content', 'ja-JP': 'バッジ内容', 'fr-FR': 'Contenu du badge', 'de-DE': 'Badge-Inhalt', 'es-ES': 'Contenido de la insignia' },
    },
  },
  chip: {
    description: {
      'en-US': 'Chip tag for marking and filtering.',
      'ja-JP': 'マークやフィルター用のチップタグ。',
      'fr-FR': 'Puce pour marquage et filtrage.',
      'de-DE': 'Chip-Marke zum Markieren und Filtern.',
      'es-ES': 'Etiqueta chip para marcar y filtrar.',
    },
    props: {
      label: { 'en-US': 'Label text', 'ja-JP': 'ラベル文字', 'fr-FR': 'Texte du libellé', 'de-DE': 'Labeltext', 'es-ES': 'Texto de la etiqueta' },
      color: { 'en-US': 'Color', 'ja-JP': '色', 'fr-FR': 'Couleur', 'de-DE': 'Farbe', 'es-ES': 'Color' },
      variant: { 'en-US': 'Variant', 'ja-JP': 'バリエーション', 'fr-FR': 'Variante', 'de-DE': 'Variante', 'es-ES': 'Variante' },
      deletable: { 'en-US': 'Whether it is deletable', 'ja-JP': '削除可能か', 'fr-FR': 'Supprimable', 'de-DE': 'Löschbar', 'es-ES': 'Si se puede eliminar' },
      avatar: { 'en-US': 'Avatar on the left', 'ja-JP': '左側のアバター', 'fr-FR': 'Avatar à gauche', 'de-DE': 'Avatar links', 'es-ES': 'Avatar a la izquierda' },
    },
  },
  card: {
    description: {
      'en-US': 'Card container to organize related content.',
      'ja-JP': '関連コンテンツをまとめるカードコンテナ。',
      'fr-FR': 'Conteneur carte pour organiser du contenu associé.',
      'de-DE': 'Karten-Container zum Organisieren zusammengehöriger Inhalte.',
      'es-ES': 'Contenedor de tarjeta para organizar contenido relacionado.',
    },
    props: {
      elevation: { 'en-US': 'Elevation level (0-5)', 'ja-JP': '影の段階(0-5)', 'fr-FR': 'Niveau d\'élévation (0-5)', 'de-DE': 'Erhebungsstufe (0-5)', 'es-ES': 'Nivel de elevación (0-5)' },
      outlined: { 'en-US': 'Whether to use a border', 'ja-JP': '枠線を使うか', 'fr-FR': 'Avec bordure', 'de-DE': 'Mit Rand', 'es-ES': 'Si usa borde' },
      interactive: { 'en-US': 'Whether it is interactive on hover', 'ja-JP': 'ホバーでインタラクティブか', 'fr-FR': 'Interactif au survol', 'de-DE': 'Interaktiv beim Überfahren', 'es-ES': 'Si es interactivo al pasar el cursor' },
    },
  },
  badge: {
    description: {
      'en-US': 'Badge marking a count or status.',
      'ja-JP': '数や状態を示すバッジ。',
      'fr-FR': 'Badge marquant un nombre ou un statut.',
      'de-DE': 'Badge markiert eine Anzahl oder einen Status.',
      'es-ES': 'Insignia que marca una cantidad o estado.',
    },
    props: {
      content: { 'en-US': 'Badge content', 'ja-JP': 'バッジ内容', 'fr-FR': 'Contenu du badge', 'de-DE': 'Badge-Inhalt', 'es-ES': 'Contenido de la insignia' },
      color: { 'en-US': 'Color', 'ja-JP': '色', 'fr-FR': 'Couleur', 'de-DE': 'Farbe', 'es-ES': 'Color' },
      variant: { 'en-US': 'Variant', 'ja-JP': 'バリエーション', 'fr-FR': 'Variante', 'de-DE': 'Variante', 'es-ES': 'Variante' },
      max: { 'en-US': 'Maximum number shown', 'ja-JP': '最大表示数', 'fr-FR': 'Nombre max. affiché', 'de-DE': 'Maximale angezeigte Zahl', 'es-ES': 'Número máximo mostrado' },
      showZero: { 'en-US': 'Whether to show zero', 'ja-JP': '0を表示するか', 'fr-FR': 'Affiche zéro', 'de-DE': 'Zeigt Null', 'es-ES': 'Si muestra cero' },
    },
  },
  accordion: {
    description: {
      'en-US': 'Accordion panel that collapses and expands.',
      'ja-JP': '折りたたみ可能なアコーディオンパネル。',
      'fr-FR': 'Panneau accordéon repliable et dépliable.',
      'de-DE': 'Akkordeon-Panel, das ein- und ausklappbar ist.',
      'es-ES': 'Panel acordeón plegable y expandible.',
    },
    props: {
      expanded: { 'en-US': 'Whether it is expanded', 'ja-JP': '展開されているか', 'fr-FR': 'Indique si déplié', 'de-DE': 'Ob ausgeklappt', 'es-ES': 'Si está expandido' },
      disabled: { 'en-US': 'Whether it is disabled', 'ja-JP': '無効にするかどうか', 'fr-FR': 'Indique si désactivé', 'de-DE': 'Ob deaktiviert', 'es-ES': 'Si está deshabilitado' },
      disableGutters: { 'en-US': 'Remove outer margin', 'ja-JP': '外側の余白を除去', 'fr-FR': 'Retire la marge externe', 'de-DE': 'Äußeren Rand entfernen', 'es-ES': 'Elimina el margen exterior' },
      onChange: { 'en-US': 'Change callback', 'ja-JP': '変更コールバック', 'fr-FR': 'Rappel de changement', 'de-DE': 'Wechsel-Callback', 'es-ES': 'Callback de cambio' },
    },
  },
  divider: {
    description: {
      'en-US': 'Divider separating content blocks.',
      'ja-JP': 'コンテンツを区切る区切り線。',
      'fr-FR': 'Séparateur divisant les blocs de contenu.',
      'de-DE': 'Trenner zwischen Inhaltsblöcken.',
      'es-ES': 'Divisor que separa bloques de contenido.',
    },
    props: {
      orientation: { 'en-US': 'Orientation', 'ja-JP': '方向', 'fr-FR': 'Orientation', 'de-DE': 'Ausrichtung', 'es-ES': 'Orientación' },
      variant: { 'en-US': 'Variant', 'ja-JP': 'バリエーション', 'fr-FR': 'Variante', 'de-DE': 'Variante', 'es-ES': 'Variante' },
      textAlign: { 'en-US': 'Alignment when text is present', 'ja-JP': 'テキストあり時の配置', 'fr-FR': 'Alignement avec texte', 'de-DE': 'Ausrichtung bei Text', 'es-ES': 'Alineación con texto' },
    },
  },
  blockquote: {
    description: {
      'en-US': 'Blockquote highlighting quoted content.',
      'ja-JP': '引用を強調するブロッククォート。',
      'fr-FR': 'Citation mettant en évidence un contenu cité.',
      'de-DE': 'Zitatblock hebt zitierten Inhalt hervor.',
      'es-ES': 'Bloque de cita resaltando contenido citado.',
    },
    props: {
      cite: { 'en-US': 'Citation source', 'ja-JP': '引用元', 'fr-FR': 'Source de la citation', 'de-DE': 'Zitatquelle', 'es-ES': 'Fuente de la cita' },
      accent: { 'en-US': 'Whether to use accent color on the left', 'ja-JP': '左側にアクセントカラーを使うか', 'fr-FR': 'Couleur d\'accent à gauche', 'de-DE': 'Akzentfarbe links', 'es-ES': 'Si usa color de acento a la izquierda' },
    },
  },
  copy: {
    description: {
      'en-US': 'One-click copy button.',
      'ja-JP': 'ワンクリックでコピーするボタン。',
      'fr-FR': 'Bouton de copie en un clic.',
      'de-DE': 'Ein-Klick-Kopier-Button.',
      'es-ES': 'Botón de copiar con un clic.',
    },
    props: {
      text: { 'en-US': 'Text to copy', 'ja-JP': 'コピーするテキスト', 'fr-FR': 'Texte à copier', 'de-DE': 'Zu kopierender Text', 'es-ES': 'Texto a copiar' },
      feedback: { 'en-US': 'Success feedback text', 'ja-JP': 'コピー成功時のフィードバック', 'fr-FR': 'Retour de copie réussie', 'de-DE': 'Erfolgs-Rückmeldung', 'es-ES': 'Mensaje de éxito al copiar' },
      timeout: { 'en-US': 'Feedback duration', 'ja-JP': 'フィードバックの継続時間', 'fr-FR': 'Durée du retour', 'de-DE': 'Rückmeldedauer', 'es-ES': 'Duración del mensaje' },
    },
  },
  status: {
    description: {
      'en-US': 'Status indicator showing online/offline, etc.',
      'ja-JP': 'オンライン/オフラインなどを示すステータスインジケーター。',
      'fr-FR': 'Indicateur de statut montrant en ligne/hors ligne, etc.',
      'de-DE': 'Statusanzeige für online/offline usw.',
      'es-ES': 'Indicador de estado mostrando en línea/fuera de línea, etc.',
    },
    props: {
      color: { 'en-US': 'Status color', 'ja-JP': 'ステータス色', 'fr-FR': 'Couleur du statut', 'de-DE': 'Statusfarbe', 'es-ES': 'Color de estado' },
      pulse: { 'en-US': 'Whether to use pulse animation', 'ja-JP': 'パルスアニメーションを使うか', 'fr-FR': 'Animation de pulsation', 'de-DE': 'Pulsierende Animation', 'es-ES': 'Si usa animación de pulso' },
      label: { 'en-US': 'Status text', 'ja-JP': 'ステータス文字', 'fr-FR': 'Texte du statut', 'de-DE': 'Statustext', 'es-ES': 'Texto de estado' },
    },
  },
  pricingtable: {
    description: {
      'en-US': 'Pricing table showing plan comparisons.',
      'ja-JP': 'プラン比較を表示する料金表。',
      'fr-FR': 'Tableau de prix montrant la comparaison des forfaits.',
      'de-DE': 'Preistabelle mit Tarifvergleich.',
      'es-ES': 'Tabla de precios mostrando comparación de planes.',
    },
    props: {
      title: { 'en-US': 'Plan title', 'ja-JP': 'プランタイトル', 'fr-FR': 'Titre du forfait', 'de-DE': 'Tarif-Titel', 'es-ES': 'Título del plan' },
      price: { 'en-US': 'Price', 'ja-JP': '価格', 'fr-FR': 'Prix', 'de-DE': 'Preis', 'es-ES': 'Precio' },
      features: { 'en-US': 'Feature list', 'ja-JP': '機能リスト', 'fr-FR': 'Liste des fonctionnalités', 'de-DE': 'Funktionsliste', 'es-ES': 'Lista de funciones' },
      highlighted: { 'en-US': 'Whether it is highlighted', 'ja-JP': '強調するか', 'fr-FR': 'Mis en évidence', 'de-DE': 'Hervorgehoben', 'es-ES': 'Si está resaltado' },
      popular: { 'en-US': 'Whether it is marked as popular', 'ja-JP': '人気としてマークするか', 'fr-FR': 'Marqué comme populaire', 'de-DE': 'Als beliebt markiert', 'es-ES': 'Si se marca como popular' },
    },
  },
  popover: {
    description: {
      'en-US': 'Popover hosting rich interactive content.',
      'ja-JP': 'リッチな対話コンテンツを載せるポップオーバー。',
      'fr-FR': 'Popover hébergeant un contenu riche et interactif.',
      'de-DE': 'Popover mit reichhaltigem interaktivem Inhalt.',
      'es-ES': 'Popover con contenido rico e interactivo.',
    },
    props: {
      open: { 'en-US': 'Whether it is open', 'ja-JP': '開いているか', 'fr-FR': 'Indique si ouvert', 'de-DE': 'Ob geöffnet', 'es-ES': 'Si está abierto' },
      anchorEl: { 'en-US': 'Anchor element', 'ja-JP': 'アンカー要素', 'fr-FR': 'Élément d\'ancrage', 'de-DE': 'Ankerelement', 'es-ES': 'Elemento ancla' },
      placement: { 'en-US': 'Popup placement', 'ja-JP': 'ポップアップの位置', 'fr-FR': 'Position du menu', 'de-DE': 'Pop-up-Position', 'es-ES': 'Posición del menú' },
      arrow: { 'en-US': 'Whether to show an arrow', 'ja-JP': '矢印を表示するか', 'fr-FR': 'Affiche une flèche', 'de-DE': 'Zeigt einen Pfeil', 'es-ES': 'Si muestra una flecha' },
    },
  },
  hovercard: {
    description: {
      'en-US': 'Hover card showing details on hover.',
      'ja-JP': 'ホバー時に詳細を表示するホバーカード。',
      'fr-FR': 'Carte au survol montrant les détails.',
      'de-DE': 'Hover-Karte zeigt Details beim Überfahren.',
      'es-ES': 'Tarjeta al pasar el cursor mostrando detalles.',
    },
    props: {
      trigger: { 'en-US': 'Trigger', 'ja-JP': 'トリガー', 'fr-FR': 'Déclencheur', 'de-DE': 'Trigger', 'es-ES': 'Activador' },
      content: { 'en-US': 'Card content', 'ja-JP': 'カード内容', 'fr-FR': 'Contenu de la carte', 'de-DE': 'Karteninhalt', 'es-ES': 'Contenido de la tarjeta' },
      openDelay: { 'en-US': 'Open delay', 'ja-JP': '開く遅延', 'fr-FR': 'Délai d\'ouverture', 'de-DE': 'Öffnungsverzögerung', 'es-ES': 'Retardo de apertura' },
      closeDelay: { 'en-US': 'Close delay', 'ja-JP': '閉じる遅延', 'fr-FR': 'Délai de fermeture', 'de-DE': 'Schließverzögerung', 'es-ES': 'Retardo de cierre' },
    },
  },
  slideover: {
    description: {
      'en-US': 'Side drawer panel.',
      'ja-JP': 'サイドドロワーパネル。',
      'fr-FR': 'Panneau tiroir latéral.',
      'de-DE': 'Seitliches Schubfach-Panel.',
      'es-ES': 'Panel cajón lateral.',
    },
    props: {
      open: { 'en-US': 'Whether it is open', 'ja-JP': '開いているか', 'fr-FR': 'Indique si ouvert', 'de-DE': 'Ob geöffnet', 'es-ES': 'Si está abierto' },
      position: { 'en-US': 'Slide direction', 'ja-JP': 'スライド方向', 'fr-FR': 'Direction du glissement', 'de-DE': 'Slide-Richtung', 'es-ES': 'Dirección del deslizamiento' },
      size: { 'en-US': 'Width', 'ja-JP': '幅', 'fr-FR': 'Largeur', 'de-DE': 'Breite', 'es-ES': 'Ancho' },
      onClose: { 'en-US': 'Close callback', 'ja-JP': '閉じるコールバック', 'fr-FR': 'Rappel de fermeture', 'de-DE': 'Schließen-Callback', 'es-ES': 'Callback de cierre' },
    },
  },
  imagegallery: {
    description: {
      'en-US': 'Image gallery with lightbox preview.',
      'ja-JP': 'ライトボックスプレビュー対応の画像ギャラリー。',
      'fr-FR': 'Galerie d\'images avec aperçu en lightbox.',
      'de-DE': 'Bildergalerie mit Lightbox-Vorschau.',
      'es-ES': 'Galería de imágenes con vista lightbox.',
    },
    props: {
      images: { 'en-US': 'Images array', 'ja-JP': '画像の配列', 'fr-FR': 'Tableau d\'images', 'de-DE': 'Bilderarray', 'es-ES': 'Array de imágenes' },
      thumbnails: { 'en-US': 'Whether to show thumbnails', 'ja-JP': 'サムネイルを表示するか', 'fr-FR': 'Affiche les vignettes', 'de-DE': 'Zeigt Vorschaubilder', 'es-ES': 'Si muestra miniaturas' },
      lightbox: { 'en-US': 'Whether to enable lightbox', 'ja-JP': 'ライトボックスを有効にするか', 'fr-FR': 'Active la lightbox', 'de-DE': 'Lightbox aktivieren', 'es-ES': 'Si activa la lightbox' },
      columns: { 'en-US': 'Grid column count', 'ja-JP': 'グリッドの列数', 'fr-FR': 'Nombre de colonnes de la grille', 'de-DE': 'Raster-Spaltenzahl', 'es-ES': 'Número de columnas de la cuadrícula' },
    },
  },
  videoplayer: {
    description: {
      'en-US': 'Video player with custom controls.',
      'ja-JP': 'カスタムコントロール付きの動画プレーヤー。',
      'fr-FR': 'Lecteur vidéo avec contrôles personnalisés.',
      'de-DE': 'Videoplayer mit benutzerdefinierten Steuerelementen.',
      'es-ES': 'Reproductor de vídeo con controles personalizados.',
    },
    props: {
      src: { 'en-US': 'Video URL', 'ja-JP': '動画のURL', 'fr-FR': 'URL de la vidéo', 'de-DE': 'Video-URL', 'es-ES': 'URL del vídeo' },
      poster: { 'en-US': 'Poster image', 'ja-JP': 'カバー画像', 'fr-FR': 'Image de couverture', 'de-DE': 'Posterbild', 'es-ES': 'Imagen de portada' },
      controls: { 'en-US': 'Whether to show controls', 'ja-JP': 'コントロールを表示するか', 'fr-FR': 'Affiche les contrôles', 'de-DE': 'Zeigt Steuerelemente', 'es-ES': 'Si muestra controles' },
      autoplay: { 'en-US': 'Whether to autoplay', 'ja-JP': '自動再生するか', 'fr-FR': 'Lecture automatique', 'de-DE': 'Automatische Wiedergabe', 'es-ES': 'Si reproduce automáticamente' },
    },
  },
  watermark: {
    description: {
      'en-US': 'Watermark component protecting content copyright.',
      'ja-JP': 'コンテンツの著作権を保護するウォーターマーク。',
      'fr-FR': 'Filigrane protégeant les droits du contenu.',
      'de-DE': 'Wasserzeichen-Komponente zum Schutz der Urheberrechte.',
      'es-ES': 'Marca de agua que protege los derechos del contenido.',
    },
    props: {
      content: { 'en-US': 'Watermark text', 'ja-JP': 'ウォーターマーク文字', 'fr-FR': 'Texte du filigrane', 'de-DE': 'Wasserzeichen-Text', 'es-ES': 'Texto de marca de agua' },
      image: { 'en-US': 'Watermark image', 'ja-JP': 'ウォーターマーク画像', 'fr-FR': 'Image du filigrane', 'de-DE': 'Wasserzeichen-Bild', 'es-ES': 'Imagen de marca de agua' },
      rotate: { 'en-US': 'Rotation angle', 'ja-JP': '回転角度', 'fr-FR': 'Angle de rotation', 'de-DE': 'Rotationswinkel', 'es-ES': 'Ángulo de rotación' },
      opacity: { 'en-US': 'Opacity', 'ja-JP': '不透明度', 'fr-FR': 'Opacité', 'de-DE': 'Deckkraft', 'es-ES': 'Opacidad' },
    },
  },
  numberanimation: {
    description: {
      'en-US': 'Number rolling animation for statistics display.',
      'ja-JP': '統計表示用の数字カウントアップアニメーション。',
      'fr-FR': 'Animation de compte de chiffres pour l\'affichage de statistiques.',
      'de-DE': 'Nummern-Roll-Animation für Statistikanzeige.',
      'es-ES': 'Animación de número en incremento para estadísticas.',
    },
    props: {
      value: { 'en-US': 'Target value', 'ja-JP': '目標値', 'fr-FR': 'Valeur cible', 'de-DE': 'Zielwert', 'es-ES': 'Valor objetivo' },
      duration: { 'en-US': 'Animation duration (ms)', 'ja-JP': 'アニメーション時間(ms)', 'fr-FR': 'Durée d\'animation (ms)', 'de-DE': 'Animationsdauer (ms)', 'es-ES': 'Duración de animación (ms)' },
      prefix: { 'en-US': 'Prefix', 'ja-JP': '接頭辞', 'fr-FR': 'Préfixe', 'de-DE': 'Präfix', 'es-ES': 'Prefijo' },
      suffix: { 'en-US': 'Suffix', 'ja-JP': '接尾辞', 'fr-FR': 'Suffixe', 'de-DE': 'Suffix', 'es-ES': 'Sufijo' },
      separator: { 'en-US': 'Thousands separator', 'ja-JP': '千分位区切り', 'fr-FR': 'Séparateur de milliers', 'de-DE': 'Tausendertrennzeichen', 'es-ES': 'Separador de miles' },
    },
  },
  typingtext: {
    description: {
      'en-US': 'Typewriter text effect.',
      'ja-JP': 'タイプライター風のテキストエフェクト。',
      'fr-FR': 'Effet de texte machine à écrire.',
      'de-DE': 'Schreibmaschinen-Text-Effekt.',
      'es-ES': 'Efecto de texto de máquina de escribir.',
    },
    props: {
      text: { 'en-US': 'Text to type out', 'ja-JP': '打ち出す文字', 'fr-FR': 'Texte à taper', 'de-DE': 'Zu tippender Text', 'es-ES': 'Texto a escribir' },
      speed: { 'en-US': 'Typing speed (ms/char)', 'ja-JP': 'タイプ速度(ms/文字)', 'fr-FR': 'Vitesse de frappe (ms/car.)', 'de-DE': 'Schreibgeschwindigkeit (ms/Zeichen)', 'es-ES': 'Velocidad de escritura (ms/car.)' },
      loop: { 'en-US': 'Whether to loop', 'ja-JP': 'ループするか', 'fr-FR': 'En boucle', 'de-DE': 'In Schleife', 'es-ES': 'Si se repite en bucle' },
      cursor: { 'en-US': 'Whether to show a cursor', 'ja-JP': 'カーソルを表示するか', 'fr-FR': 'Affiche un curseur', 'de-DE': 'Zeigt einen Cursor', 'es-ES': 'Si muestra un cursor' },
    },
  },
  feature: {
    description: {
      'en-US': 'Feature showcase card with icon, title and description.',
      'ja-JP': 'アイコン＋タイトル＋説明の機能紹介カード。',
      'fr-FR': 'Carte de présentation de fonctionnalité avec icône, titre et description.',
      'de-DE': 'Funktions-Karte mit Icon, Titel und Beschreibung.',
      'es-ES': 'Tarjeta de presentación de funcionalidad con icono, título y descripción.',
    },
    props: {
      icon: { 'en-US': 'Feature icon', 'ja-JP': '機能アイコン', 'fr-FR': 'Icône de fonctionnalité', 'de-DE': 'Funktions-Icon', 'es-ES': 'Icono de funcionalidad' },
      title: { 'en-US': 'Title', 'ja-JP': 'タイトル', 'fr-FR': 'Titre', 'de-DE': 'Titel', 'es-ES': 'Título' },
      description: { 'en-US': 'Description', 'ja-JP': '説明', 'fr-FR': 'Description', 'de-DE': 'Beschreibung', 'es-ES': 'Descripción' },
      direction: { 'en-US': 'Arrangement direction', 'ja-JP': '配置方向', 'fr-FR': 'Orientation', 'de-DE': 'Ausrichtung', 'es-ES': 'Orientación' },
    },
  },
  feed: {
    description: {
      'en-US': 'Feed container showing a stream of activities.',
      'ja-JP': 'アクティビティのストリームを表示するフィードコンテナ。',
      'fr-FR': 'Conteneur de flux affichant une liste d\'activités.',
      'de-DE': 'Feed-Container zeigt Aktivitätsstream.',
      'es-ES': 'Contenedor de feed mostrando un stream de actividades.',
    },
    props: {
      items: { 'en-US': 'Feed items', 'ja-JP': 'フィード項目', 'fr-FR': 'Éléments du flux', 'de-DE': 'Feed-Elemente', 'es-ES': 'Elementos del feed' },
      loading: { 'en-US': 'Whether it is loading', 'ja-JP': '読み込み中か', 'fr-FR': 'En cours de chargement', 'de-DE': 'Lädt', 'es-ES': 'Si está cargando' },
      hasMore: { 'en-US': 'Whether there is more', 'ja-JP': 'さらに読み込めるか', 'fr-FR': 'Y a-t-il plus', 'de-DE': 'Gibt es mehr', 'es-ES': 'Si hay más' },
      onLoadMore: { 'en-US': 'Load more callback', 'ja-JP': 'さらに読み込むコールバック', 'fr-FR': 'Rappel charger plus', 'de-DE': 'Weitere laden-Callback', 'es-ES': 'Callback cargar más' },
    },
  },
}
