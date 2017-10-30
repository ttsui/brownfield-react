<?php

$v8 = new V8Js();

$src = file_get_contents('./dist/main.js');

try {
    $rendered = $v8->executeString($src);
    echo $rendered;
    echo "\n";
} catch (V8JsException $e) {
    var_dump($e);
}
