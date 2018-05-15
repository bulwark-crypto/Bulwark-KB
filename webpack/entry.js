/*jshint esversion: 6 */

import 'jquery';
import 'popper.js';
import 'bootstrap-material-design';
import './main.scss';

// Needed to get JQuery to work
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

// Start Bootstrap Material Design
$( document ).ready(function() {
    $('body').bootstrapMaterialDesign();
});
