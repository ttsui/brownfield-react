<?php

$v8 = new V8Js();

$src = implode(";\n", [
    file_get_contents('./dist/v8js_index.js'),
    "print(v8js_index.serverRender('App'));\n"
]);

try {
    $rendered = $v8->executeString($src);
    echo $rendered;
    echo "\n";
} catch (V8JsException $e) {
    var_dump($e);
}
