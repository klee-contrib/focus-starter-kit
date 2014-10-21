# defaults values
defaults =
  cssClass:
    table: "table table-condensed table-bordered tableWithBtnBar"
      ul: ""
        panelDefault: "panel panel-default",
        panelPaginator: "panel-body paginator ",
        btnBar: "btnBar",
        form: "form-horizontal",
        list: "list-group"

# Default css class for tables.
Handlebars.registerHelper "defaultTableClass", ()->
  return defaults.cssClass.table
# Default css class for tables.
Handlebars.registerHelper "btnBarClass", ()->
  return defaults.cssClass.btnBar

# Default css class for tables.
Handlebars.registerHelper "defaultFormClass", ()->
  return defaults.cssClass.form

# Create the default html that opens a search pattern layout
Handlebars.registerHelper "open_search", () ->
    html = "<div>
                <div class='panel panel-default'>
                    <div class='panel-body'>
                        <div class='row'>"
    return new Handlebars.SafeString(html)
# Create the default html that closes a search pattern layout
Handlebars.registerHelper "close_search", () ->
    html = "            </div>
                    </div>
                </div>
            </div>"
    return new Handlebars.SafeString(html)

# Create the default html that opens a search pattern result layout
Handlebars.registerHelper "open_search_result", () ->
    html = html = "<div>
                        <div class='#{defaults.cssClass.panelDefault}'>
                            <div class='panel-body'>"
    return new Handlebars.SafeString(html)
# Create the default html that closes a search pattern result layout
Handlebars.registerHelper "close_search_result", () ->
    html = "                </div>
                        </div>
                    </div>
           "
    return new Handlebars.SafeString(html)

Handlebars.registerHelper "open_search_criteria", () ->
  return new Handlebars.SafeString("#{Handlebars.helpers.open_panel.call(this, i18n.t('application.search'), {hash:{disablePicto:true}})}")

Handlebars.registerHelper "close_search_criteria", (options) ->
  options = options or {}
  opt = options.hash or {}
  createButtonSearchBar = ()=>
    if not opt.roleCreate
      return ''
    opt = _.extend(opt, {class: 'btnCreate', role:opt.roleCreate})
    labelCreate = if  opt.text_keyCreate? then  opt.text_keyCreate else 'button.create';
    buttonCreate = Handlebars.helpers.button.call(this, labelCreate, {hash: opt })
    return "<div class='#{defaults.cssClass.btnBar}'>#{buttonCreate}</div>"

  return new Handlebars.SafeString("
  <div class='#{defaults.cssClass.btnBar}'>
      #{Handlebars.helpers.button.call(this, 'button.reset', {hash:{class: 'btnReset'}})}
      #{Handlebars.helpers.button.call(this, 'button.search', {hash:{class: 'btnSearch', type: 'submit'}})}
  </div>
  #{createButtonSearchBar()}
  #{Handlebars.helpers.close_panel.call(this)}")

Handlebars.registerHelper "open_facet_criteria", (i18n_key) ->
  return new Handlebars.SafeString("#{Handlebars.helpers.open_panel.call(this, i18n.t(i18n_key), {hash:{disablePicto:true, class:'facet'}})}")

Handlebars.registerHelper "close_facet_criteria", () ->
  return new Handlebars.SafeString("#{Handlebars.helpers.close_panel.call(this)}")

Handlebars.registerHelper "result_container", (i18n_key, options)->
  options = options or {}
  opt = options.hash or {}
  #Default width
  width = opt.width or 9
  html = "<div id='results' class='#{Handlebars.helpers.col.call(this, width)}}'></div>"
  return new Handlebars.SafeString(html)
Handlebars.registerHelper "open_criteria", (i18n_key, options)->
  options = options or {}
  opt = options.hash or {}
  #Default width
  width = opt.width or 3
  html = "
    <div class='titleSearch'>
        <h1>#{i18n.t(i18n_key)}</h1>
    </div>
    <div class='#{Handlebars.helpers.col.call(this, width)}'>
    <form novalidate>
        <div class='criteria'>
  "
  return new Handlebars.SafeString(html)

Handlebars.registerHelper "close_criteria", (i18n_key, options)->
  html = "</div></form></div>"
  return new Handlebars.SafeString(html)


# Create the default _opening_ html for table result. Works as a tag.
# Works with _close_result_table_ helper.
Handlebars.registerHelper "open_result_table", (options)->
  options = options or {}
  opt = options.hash or {}
  striped = if opt.striped? then opt.stripped else true
  cssClass = defaults.cssClass.table
  if striped
    cssClass = cssClass + "  table-striped"
  # Generate the header actions.
  tableHeaderActions = ()=>
    showHeaderActions = if opt.showHeaderActions? then opt.showHeaderActions else true
    return if showHeaderActions then "<div class='panel-body'>" + Handlebars.helpers.tableHeaderAction.call(this, {hash:{resultLabel: '', exportUrl: this.exportUrl}}) + "</div>" else ""
  # Produce the html to render.
  html = "#{tableHeaderActions()}
           <div class='panel-body' >
              <table class='#{cssClass}'>"
  return new Handlebars.SafeString(html)

# Create the default _closing_ html for table result. Works as a tag.
# Works with _open_result_table_ helper.
Handlebars.registerHelper "close_result_table", (options)->
  options = options or {}
  opt = options.hash or {}
  # Render the pagination Pagination.
  paginate = ()=>
    isPaginate = if opt.isPaginate? then opt.isPaginate else true
    if isPaginate
      Handlebars.helpers.paginate.call(this, {hash:{showResultNumber:false}})
    else ""
  html = "</table>
            #{paginate()}
        </div>
    <div id='lineSelectionContainer'></div>"
  return new Handlebars.SafeString(html)

# Create the default _opening_ html for list (ul) result. Works as a tag.
# Works with _close_result_list_ helper.
Handlebars.registerHelper "open_result_list", (options)->
  options = options or {}
  opt = options.hash or {}
  cssClass = defaults.cssClass.ul
  # Generate the header actions.
  tableHeaderActions = ()=>
    showHeaderActions = if opt.showHeaderActions? then opt.showHeaderActions else true
    return if showHeaderActions then Handlebars.helpers.tableHeaderAction.call(this, {hash:{resultLabel: '', exportUrl: this.exportUrl}}) else ""
  # Produce the html to render.
  html = "<div class='panel-body'>
            #{tableHeaderActions()}
           </div>
            <div class='panel-body' >
              <ul class='#{cssClass}'>"
  return new Handlebars.SafeString(html)

# Create the default _closing_ html for list (ul) result. Works as a tag.
# Works with _open_result_list_ helper.
Handlebars.registerHelper "close_result_list", (options)->
    options = options or {}
    opt = options.hash or {}
    # Render the pagination Pagination.
    paginate = ()=>
        isPaginate = if opt.isPaginate? then opt.isPaginate else true
        if isPaginate
            Handlebars.helpers.paginate.call(this, {hash:{showResultNumber:false}})
        else ""
    html = "</ul>
            #{paginate()}
        </div>
    <div id='lineSelectionContainer'></div>"
    return new Handlebars.SafeString(html)

# Create the default opening html for list item (li). Works as a tag.
# Works with close_result_list_item helper.
Handlebars.registerHelper "open_result_list_item", (options)->
  options = options or {}
  opt = options.hash or {}
  html = "<li>"
  return new Handlebars.SafeString(html)

# Create the default closing html for list item (li). Works as a tag.
# Works with open_result_list_item helper.
Handlebars.registerHelper "close_result_list_item", (options)->
  options = options or {}
  opt = options.hash or {}
  html = "</li>"
  return new Handlebars.SafeString(html)

# Create the default opening html for list item title. Works as a tag.
# Works with close_result_list_item_title helper.
Handlebars.registerHelper "open_result_list_item_title", (options)->
  options = options or {}
  opt = options.hash or {}
  dataSelection = if opt.dataSelection? then "data-selection='#{this[opt.dataSelection]}'" else ""
  html = "<h4 #{dataSelection}>"
  return new Handlebars.SafeString(html)

# Create the default closing html for list item title. Works as a tag.
# Works with open_result_list_item_title helper.
Handlebars.registerHelper "close_result_list_item_title", (options)->
  options = options or {}
  opt = options.hash or {}
  html = "</h4>"
  return new Handlebars.SafeString(html)

# Create the default opening html for list item description. Opens a new row of description. Works as a tag.
# Works with close_result_list_item_subtext helper.
Handlebars.registerHelper "open_result_list_item_subtext", (options)->
  options = options or {}
  opt = options.hash or {}
  html = "<span>"
  return new Handlebars.SafeString(html)

# Create the default closing html for list item description. Closes the current row of description. Works as a tag.
# Works with open_result_list_item_subtext helper.
Handlebars.registerHelper "close_result_list_item_subtext", (options)->
  options = options or {}
  opt = options.hash or {}
  html = "</span>"
  return new Handlebars.SafeString(html)

# Create the default html that opens a panel and adds a title to it.
Handlebars.registerHelper "open_panel", (i18n_key, options) ->
    options = options or {}
    opt = options.hash or {}
    disablePicto = opt.disablePicto or false
    # Subtitle in smaller size
    titleSubHtml = ()=>
        if opt.titleSub?
            return ", <span>#{opt.titleSub}</span>"
        else return ""
    # Title
    titleHtml = ()=>
        if opt.title?
            return "<div class='panel-heading'>
                <div class='titleSecondary'>
                    <h1>#{opt.title}#{titleSubHtml()}</h1>
                </div>
            </div>"
        else return ""
    pictoHtml = ()=>
        if disablePicto
            return ""
        else return "<i class='fa fa-chevron-right'></i>"

    cssClass = opt.class || ''
    html = "<div class='#{defaults.cssClass.panelDefault} #{cssClass}'>
            #{titleHtml()}
            <div class='panel-heading'>
                <h3 class='panel-title'>#{pictoHtml()}#{i18n.t(i18n_key)}</h3>
            </div>
            <div class='panel-body'>"
    return new Handlebars.SafeString(html)

# Create the default html that closes a panel.
# Works with open_panel helper.
Handlebars.registerHelper "close_panel", (property, options) ->
    html = "</div>
            </div>"
    return new Handlebars.SafeString(html)

# Standard pattern button
# Exemple => patternButton("button.save", {class:'btnSave', type="submit"}, options)
patternButton=(pattern_text_key, pattern_options, options) ->
  # Force options with pattern options if not explicit.
  options = options or {}
  opt = options.hash or {}
  opt.class = opt.class or pattern_options.class
  opt.type = opt.type or pattern_options.type
  opt.icon = opt.icon or pattern_options.icon
  # Force translation key with pattern translation key if not explicit.
  text_key = opt.text_key or pattern_text_key
  return Handlebars.helpers.button.call(this, text_key, {hash:opt})

# Edit button for detail pattern
# Example => button_edit
# Example => button_edit class="myClass"
# Example => button_edit text_key="myPage.myButtonName"
Handlebars.registerHelper "button_edit",(options) ->
  return patternButton("button.edit", {class:'btnEdit'}, options)

# Save button for detail pattern
# Example => button_save
# Example => button_save class="myClass"
# Example => button_save text_key="myPage.myButtonName"
Handlebars.registerHelper "button_save",(property, options) ->
  text = if property? and _.isString(property) and property isnt "" then property else "button.save"
  return patternButton(text, {class:'btnSave', type:"submit"}, options)

# Cancel button for detail pattern
# Example => button_cancel
# Example => button_cancel class="myClass"
# Example => button_cancel text_key="myPage.myButtonName"
Handlebars.registerHelper "button_cancel",(options) ->
  return patternButton("button.cancel", {class:'btnCancel'}, options)

# Cancel button for detail pattern
# Example => button_delete
# Example => button_delete class="myClass"
# Example => button_delete text_key="myPage.myButtonName"
Handlebars.registerHelper "button_delete",(options) ->
  return patternButton("button.delete", {class:'btnDelete'}, options)

# Create button for detail pattern
# Example => button_create
# Example => button_create class="myClass"
# Example => button_create text_key="myPage.myButtonName"
Handlebars.registerHelper "button_create",(options) ->
  return patternButton("button.create", {class:'btnCreate'}, options)



# Search button for search pattern
# Example => button_search
# Example => button_search class="myClass"
# Example => button_search text_key="myPage.myButtonName"
Handlebars.registerHelper "button_search",(options) ->
  return patternButton("button.search", {class:'btnSearch', type:"submit", icon:"search"}, options)

# Reset button for search pattern
# Example => button_reset
# Example => button_reset class="myClass"
# Example => button_reset text_key="myPage.myButtonName"
Handlebars.registerHelper "button_reset",(options) ->
  return patternButton("button.reset", {class:'btnReset'}, options)

# Pattern picto button for list
patternButtonPicto=(text_key, cssClass, picto, options) ->
  opt = options.hash or {}
  cssClass = opt.class or cssClass
  loading = ->
    if opt.isLoading or type is 'submit'
      return "data-loading data-loading-text='#{opt.loadingText or i18n.t('buttonPicto.loading')}'"
    return ""
  type = opt.type or "button"
  button = "<button type='#{type}' #{loading()} class='btnPicto #{cssClass}' title='#{if text_key isnt "" then i18n.t(text_key) else ""}'><i class='fa fa-2x #{picto}'></i></button>"
  new Handlebars.SafeString(button)

# Delete picto button for list
# Example => button_picto_delete class="btn-danger" type="submit"
Handlebars.registerHelper "button_picto_delete",(options) ->
  return patternButtonPicto('button.delete', 'btnDelete', 'fa-trash-o', options)

 # Add picto button for list
# Example => button_picto_Add class="btn-danger"
Handlebars.registerHelper "button_picto_add",(options) ->
  return patternButtonPicto('button.add', 'btnAdd', 'fa-plus-square', options)

# Publish image folder
# Example => urlImage "MyPicture.svg"
Handlebars.registerHelper "urlImage",(fileName, options) ->
  return "#{require('../models/URL').assets.images}/#{fileName}"

# Displays a Back link
# Example: {{back_link}}
Handlebars.registerHelper "back_link",(options) ->
  opt = options.hash or {}
  translationKey = if opt.translationKey? then opt.translationKey else "button.back"
  listUrl = if opt.listUrl? then opt.listUrl else "listUrl"
  href = this[listUrl]
  label = i18n.t(translationKey)
  html = "<a href='#{href}'>#{label}</a>"
  return new Handlebars.SafeString(html)


#*** Table specific fields helper

# Table specific field edit control : no label and no form specific grid container.
# Example: {{tab_input_for myProperty}}
Handlebars.registerHelper "tab_input_for", (property, options) ->
  options = options or {}
  opt = options.hash or {}
  opt.isNoLabel = opt.isNoLabel or true
  opt.noGrid = opt.noGrid or true
  return Handlebars.helpers.input_for.call(this, property, {hash:opt})

# Table specific field display control : no label and no form specific grid container.
# Example: {{tab_display_for myProperty}}
Handlebars.registerHelper "tab_display_for", (property, options) ->
  options = options or {}
  opt = options.hash or {}
  opt.isNoLabel = opt.isNoLabel or true
  opt.noGrid = opt.noGrid or true
  return Handlebars.helpers.display_for.call(this, property, {hash:opt})

# Create the html for a primary title (outside content, above tabs).
# Handles a mandatory generic i18n title, then a optional business item title, and finally a business item sub title.
# Exemple : {{title_primary "translation_key" title=sitId.title.title titleSub=sitId.title.subTitle}}
Handlebars.registerHelper "title_primary", (i18n_key, options) ->
    options = options or {}
    opt = options.hash or {}
    # Title
    titleHtml = ()=>
        if opt.title?
            return " #{opt.title}"
        else return ""
    # Subtitle in smaller size
    titleSubHtml = ()=>
        if opt.titleSub?
            return ", <span>#{opt.titleSub}</span>"
        else return ""
    # Global html
    html = "<div class='titlePrimary'>
                <h1>#{i18n.t(i18n_key)}#{titleHtml()}#{titleSubHtml()}</h1>
            </div>"
    return new Handlebars.SafeString(html)

# Language button
# Example: {{language_btn "en-GB"}}
# When using this helper with a new country, make sure that the css CLASS of its flag corresponds to flag flag-#{property}. If not, modify the the flag.css file.
Handlebars.registerHelper "language_btn", (property, options) ->
  options = options or {}
  opt = options.hash or {}

  activeClass = ""
  activeClass = "class='active'" if property is opt.currentCultureCode

  html =
  "<div data-lang='#{property}' #{activeClass}>
        <img data-lang='#{property}' class='flag flag-#{property}'/>
    </div>"
  return new Handlebars.SafeString(html)

# Home page dashboard open
# Example: {{open_dashboard}}
Handlebars.registerHelper "open_dashboard", (label, options) ->
  options = options or {}
  opt = options.hash or {}

  html =
  "<div class='dashboard'>
    <div class='panel panel-default'>
        <div class='panel-body'>
        <h2>#{label}</h2>"
  return new Handlebars.SafeString(html)

  # Home page dashboard close
# Example: {{close_dashboard}}
Handlebars.registerHelper "close_dashboard", () ->
  html =
  "         </div>
       </div>
  </div>"
  return new Handlebars.SafeString(html)

 # Home page dashboard tile
# Example: {{dashboard_tile count "translation_key" }}
Handlebars.registerHelper "dashboard_tile", (value, i18n_key, options) ->
  options = options or {}
  opt = options.hash or {}
  cssColor = opt.classColor or ""
  cssPicto = opt.classPicto or ""
  link = opt.link or ""
  html =
  "<div ondragstart='return false;' >
    <a href='#{link}'>
        <div class='tile #{cssColor} #{cssPicto}'>
            <span>#{value}</span>
            <span>#{i18n.t(i18n_key)}</span>
        </div>
    </a>
    </div>"
  return new Handlebars.SafeString(html)

# Displaying a font-awesome icon.
Handlebars.registerHelper "fa_icon", (value, options) ->
  options = options or {}
  opt = options.hash or {}
  iconContainer = opt.iconContainer or {}
  htmlClass = opt.class or ""
  icon = iconContainer[value] or value
  html = "<i class='fa #{icon} fa-fw #{htmlClass}'></i>"
  return new Handlebars.SafeString(html)

# Home page dashboard paginer
# Example: {{dashboard_paginer "label" classLeft="backSite" classRight="nextSite" }}
Handlebars.registerHelper "dashboard_paginer", (label, options) ->
  options = options or {}
  opt = options.hash or {}
  cssLeft = opt.classLeft or ""
  cssRight = opt.classRight or ""
  html =
  "<div class='dashboard-paginer' >
    <a class='#{cssLeft}' >#{Handlebars.helpers.fa_icon('fa-caret-left')}</a>
    <span>#{label}</span>
    <a class='#{cssRight}' >#{Handlebars.helpers.fa_icon('fa-caret-right')}</a>
   </div>"
  return new Handlebars.SafeString(html)

# Home page dashboard detail link
# Example: {{dashboard_link "#/site" }}
Handlebars.registerHelper "dashboard_link", (link, options) ->
  options = options or {}
  opt = options.hash or {}
  label = i18n.t('accueil.homeComposite.detailLink')
  html =
  "<div class='dashboard-link' >
    <a href='#{link}' ><span>#{label}</span><span>#{Handlebars.helpers.fa_icon('fa-play-circle')}<span></a>
   </div>"
  return new Handlebars.SafeString(html)

 # Home page dashboard counter title
# Example: {{dashboard_counter_title 10 "ASSIGNED" }}
Handlebars.registerHelper "dashboard_counter_title", (value, label, options) ->
  options = options or {}
  opt = options.hash or {}
  html =
  "<div class='dashboard-counter-title'>
    <span>#{value}</span>
    <span>#{label}</span>
   </div>"
  return new Handlebars.SafeString(html)

 # Home page dashboard counter
# Example: {{dashboard_counter count "translation_key" }}
Handlebars.registerHelper "dashboard_counter", (value, total, i18n_key, options) ->
  options = options or {}
  opt = options.hash or {}
  cssColor = opt.classColor or ""
  link = opt.link or ""
  html =
  "<div class='dashboard-counter' ondragstart='return false;'>
    <a href='#{link}'>
        <div>
            <div class='#{cssColor}'>
                <span>#{value}</span>
                <span>/#{total}</span>
            </div>
            <span>#{i18n.t(i18n_key)}</span>
        </div>
    </a>
    </div>"
  return new Handlebars.SafeString(html)

  #Handlebars.registerHelper "dashboard_counter", (value, total, i18n_key, options) ->

  ###
  Helper pour l'avancement des étapes.
  <span class="label label-primary"><b>1<b> verification</span>
  <spanspan class="label label-primary"><b>2<b> Validation</span>
  <span class="label label-default"><b>3<b> Initialisation</span>
  <span class="label label-default"><b>4<b> Complement</span>
  <span class="label label-default"><b>5<b> Renforcement</span>
  @example: steps 1 type="gestionnaireNaturel"
###
Handlebars.registerHelper "steps", (activeStep, options) ->
  opt = (options or {}).hash or {}
  type = opt.type
# Definition des steps pour le processus d'activation d'un compte d'un gestionnaire naturel.
  stepsGestionnaireNaturel = [
    {step: 1, label: "connexion.step.verification", url: "#connexion/verification/gestionnaireNaturel"}
    {step: 2, label: "connexion.step.validation", url: "#connexion/validation/gestionnaireNaturel"}
    {step: 3, label: "connexion.step.initialisation", url: "#connexion/initialisation/gestionnaireNaturel"}
    {step: 4, label: "connexion.step.complement", url: "#connexion/complement/gestionnaireNaturel"}
    {step: 5, label: "connexion.step.renforcement", url: "#connexion/renforcement/gestionnaireNaturel"}
  ]

  # Definition des steps pour le processus d'activation d'un compte d'un partenaire
  stepsPartenaire = [
    {step: 1, label: "connexion.step.initialisation"}
    {step: 2, label: "connexion.step.complement"}
    {step: 3, label: "connexion.step.activation"}
  ]

  # Definition des steps pour la creation d'un compte externe.
  stepsExterne = [
    {step: 1, label: "connexion.step.collecte"}
    {step: 2, label: "connexion.step.initialisation"}
    {step: 3, label: "connexion.step.validation"}
    {step: 4, label: "connexion.step.activation"}
  ]

  # Retourne le steps correspondant.
  getSteps = (stepType) ->
    switch stepType
      when "gestionnaireNaturel" then  return  stepsGestionnaireNaturel
      when "partenaire" then  return  stepsPartenaire
      else  return  stepsExterne

  # Génère une ligne de label.
  generateLabel =(data, active, stepsSize) ->
    status = if data.step is active then "primary" else if data.step < active then "success" else  "default active"
    tagName = if data.step < active and active < stepsSize then "a" else "button"
    return "<#{tagName} class='btn btn-#{status} btn-lg' href='#{data.url}'>#{i18n.t(data.label)}</#{tagName}>"
  genrateLabels =->
    value = ""
    stepsData = getSteps(type)
    stepsDataLength = stepsData.length
    for data in stepsData
      value = value + generateLabel(data, +activeStep , stepsDataLength)
    return value
  html = "<div class='steps'>#{genrateLabels()}</div>"
  return new Handlebars.SafeString(html)

Handlebars.registerHelper 'job_status_icon', (property, options)->
  opt = (options or {}).hash or {}
  name = @[property]
  console.log "Icone",opt.icon, @[opt.icon]
  icon = switch @[opt.icon]
    when 'admin' then 'fa-times-circle'
    else 'fa-tags'
  return  new Handlebars.SafeString("<div class='#{Handlebars.helpers.col 12}'>#{Handlebars.helpers.fa_icon icon}#{name}</div>")

###
  Helper pour uniformiser l'utilisation des formulaires.
  Exemple: {{#form}} {{input_for "firstName"}} {{/form}}
###
Handlebars.registerHelper 'form', (options)->
    return "<form novalidate class='form-horizontal' role='form'>#{options.fn(@)}</form>"
###
  Helper pour uniformiser l'utilisation des formulaires.
  Exemple: {{#form}} {{input_for "firstName"}} {{/form}}
###
Handlebars.registerHelper 'display', (options)->
    return "<form novalidate class='form-horizontal' role='form'>#{options.fn(@)}</form>"
###
  Helper pour uniformiser l'utilisation des formulaires.
  Exemple: {{#button_toolbar}} {{{button_cancel}} {{button_save}} {{/button_toolbar}}
###
Handlebars.registerHelper 'btn_toolbar', (options)->
    return "<div class='btn-toolbar'><div class='btn-group'>#{options.fn(@)}</div></div>"
###
  Helper pour uniformiser l'utilisation des panel.
  Exemple: {{#panel}} {{{#form}} {{/form}} {{/panel}}
  Exemple: {{#panel "titlekey"}} {{{#form}} {{/form}} {{/panel}}
###
Handlebars.registerHelper 'panel', (title, options)->
    if _.isObject(title)
      options = title
      title = undefined
    title =  if not title? then "" else i18n.t(title)
    html = "<div class='panel panel-default'>
          <div class='panel-heading'>#{title}</div>
          <div class='panel-body'>#{options.fn(@)}</div>
        </div>"
    return html
###
  Helper pour uniformiser l'utilisation des formulaires.
  Exemple: {{#page "page.title" panelTitle="page.panel.title"}} {{input_for "firstName"}} {{/page}}
###
Handlebars.registerHelper 'page', (title, options)->
  options = options or {}
  opt = options.hash or {}
  console.error("noTitleInYourTemplate")if not _.isString(title)
  html = "
      <h1>#{i18n.t(title)}</h1>
      <div class='page-content'>
        #{options.fn(@)}
      </div>
  "
  return html

require './criteria'

# Create the default _opening_ html for table result. Works as a tag.
# Works with _close_result_table_ helper.
Handlebars.registerHelper "result", (options)->
  options = options or {}
  opt = options.hash or {}
  isTable = if opt.isTable? then opt.isTable else true
  resultLabel = if opt.resultLabel then i18n.t(opt.resultLabel) else undefined
  listTagName = if isTable then "table" else "ul"
  elementTagName = if isTable then "tr" else "li"
  striped = if opt.striped? then opt.stripped else true
  cssClass = if isTable then defaults.cssClass.table else defaults.cssClass.list
  if striped
    cssClass = cssClass + "  table-striped"
  # Generate the header actions.
  tableHeaderActions = ()=>
    showHeaderActions = if opt.showHeaderActions? then opt.showHeaderActions else true
    return if showHeaderActions then "#{Handlebars.helpers.tableHeaderAction.call(this, {hash:{resultLabel: '', exportUrl: this.exportUrl, resultLabel: resultLabel}})}" else ""
  # Render the pagination Pagination.
  paginate = ()=>
    isPaginate = if opt.isPaginate? then opt.isPaginate else true
    if isPaginate
      Handlebars.helpers.paginate.call(this, {hash:{showResultNumber:false}})
    else ""
  # Produce the html to render.
  html = " #{tableHeaderActions()}
              <#{listTagName} class='#{cssClass}'>
                #{options.fn(@)}
              </#{listTagName}>
            #{paginate()}
          <div id='lineSelectionContainer'></div>
  "
  return new Handlebars.SafeString(html)
