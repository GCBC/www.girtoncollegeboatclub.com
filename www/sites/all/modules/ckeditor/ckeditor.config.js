/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/*
 WARNING: clear browser's cache after you modify this file.
 If you don't do this, you may notice that browser is ignoring all your changes.
 */
CKEDITOR.editorConfig = function(config) {
  config.indentClasses = [ 'rteindent1', 'rteindent2', 'rteindent3', 'rteindent4' ];

  // [ Left, Center, Right, Justified ]
  config.justifyClasses = [ 'rteleft', 'rtecenter', 'rteright', 'rtejustify' ];

  // The minimum editor width, in pixels, when resizing it with the resize handle.
  config.resize_minWidth = 450;

  // Protect PHP code tags (<?...?>) so CKEditor will not break them when
  // switching from Source to WYSIWYG.
  // Uncommenting this line doesn't mean the user will not be able to type PHP
  // code in the source. This kind of prevention must be done in the server
  // side
  // (as does Drupal), so just leave this line as is.
  config.protectedSource.push(/<\?[\s\S]*?\?>/g); // PHP Code
  config.protectedSource.push(/<code>[\s\S]*?<\/code>/gi); // Code tags
  config.extraPlugins = '';

  // Define as many toolbars as you need, you can change toolbar names and remove or add buttons.
  // List of all buttons is here: http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.config.html#.toolbar_Full

  // This toolbar should work fine with "Filtered HTML" filter
  config.toolbar_DrupalFiltered = [
    ['Source'],
    ['Cut','Copy','Paste','PasteText','PasteFromWord','-','SpellChecker', 'Scayt'],
    ['Undo','Redo','Find','Replace','-','SelectAll','RemoveFormat'],
    ['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar'],
    ['Maximize', 'ShowBlocks'],
    '/',
    ['Format'],
    ['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
    ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
    ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiRtl','BidiLtr'],
    ['Link','Unlink','Anchor','Linkit','LinkToNode','LinkToMenu'],
    ['DrupalBreak', 'DrupalPageBreak']
   ];

 /*
  * DrupalBasic will be forced on some smaller textareas (if enabled)
  * if you change the name of DrupalBasic, you have to update
  * CKEDITOR_FORCE_SIMPLE_TOOLBAR_NAME in ckeditor.module
  */
  config.toolbar_DrupalBasic = [ [ 'Format', 'Bold', 'Italic', '-', 'NumberedList','BulletedList', '-', 'Link', 'Unlink', 'Image' ] ];

  /*
   * This toolbar is dedicated to users with "Full HTML" access some of commands
   * used here (like 'FontName') use inline styles, which unfortunately are
   * stripped by "Filtered HTML" filter
   */
  config.toolbar_DrupalFull = [
      ['Source'],
      ['Cut','Copy','Paste','PasteText','PasteFromWord','-','SpellChecker', 'Scayt'],
      ['Undo','Redo','Find','Replace','-','SelectAll','RemoveFormat'],
      ['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar'],
      '/',
      ['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
      ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
      ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiRtl','BidiLtr'],
      ['Link','Unlink','Anchor','Linkit','LinkToNode', 'LinkToMenu'],
      '/',
      ['Format','Font','FontSize'],
      ['TextColor','BGColor'],
      ['Maximize', 'ShowBlocks'],
      ['DrupalBreak', 'DrupalPageBreak']
     ];

/*
 * Toolbar for "Contributor" ckeditor profile and "Advanced HTML" input filter.
 * -14/08/2011, Calum J. Eadie
*/
config.toolbar_Drupal_Contributor_Advanced_HTML = [
    ['Source'],
    ['Undo','Redo'],
    ['Cut','Copy','Paste','PasteText','PasteFromWord'],
    ['Find','Replace'],
    ['SelectAll','RemoveFormat'],
    ['Maximize', 'ShowBlocks'],
    '/',
    ['Format','Font','FontSize'],
    ['TextColor','BGColor'],
    ['Subscript','Superscript'],
    ['Bold','Italic','Underline','Strike'],
    ['Link','Unlink','Anchor'],
//    ['Linkit','LinkToNode', 'LinkToMenu'], plugins give errors
    '/',
    ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
    ['NumberedList','BulletedList'],
    ['Outdent','Indent','Blockquote'],
    ['DrupalBreak', 'DrupalPageBreak'],
    ['Image','Youtube','Vimeo','Table','IMCE','HorizontalRule','SpecialChar']
];

  /*
   * Append here extra CSS rules that should be applied into the editing area.
   * Example: 
   * config.extraCss = 'body {color:#FF0000;}';
   */
  config.extraCss = '';
  /**
   * Sample extraCss code for the "marinelli" theme.
   */
  var themeName = Drupal.settings.ckeditor.theme;
  if (typeof themeName == "object") {
    themeName = Drupal.settings.ckeditor.theme[0];
  }
  if (themeName == "marinelli") {
    config.extraCss += "body{background:#FFF;text-align:left;font-size:0.8em;}";
    config.extraCss += "#primary ol, #primary ul{margin:10px 0 10px 25px;}";
  }
  if (themeName == "newsflash") {
    config.extraCss = "body{min-width:400px}";
  }

  /**
   * CKEditor's editing area body ID & class.
   * See http://drupal.ckeditor.com/tricks
   * This setting can be used if CKEditor does not work well with your theme by default.
   */
  config.bodyClass = '';
  config.bodyId = '';
  /**
   * Sample bodyClass and BodyId for the "marinelli" theme.
   */
  if (themeName == "marinelli") {
    config.bodyClass = 'singlepage';
    config.bodyId = 'primary';
  }
};
