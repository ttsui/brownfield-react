<?php

require __DIR__ . '/vendor/autoload.php';

$react_source = [
    file_get_contents('node_modules/react/umd/react.development.js'),
    file_get_contents('node_modules/react-dom/umd/react-dom.development.js'),
    file_get_contents('node_modules/react-dom/umd/react-dom-server.browser.development.js')
];
$app_source = file_get_contents('dist/react_php_v8js_index.js');

$rjs = new ReactJS(implode(";\n", $react_source), $app_source);
$rjs->setComponent('react_php_v8js_index.App');

echo $rjs->getMarkup();

