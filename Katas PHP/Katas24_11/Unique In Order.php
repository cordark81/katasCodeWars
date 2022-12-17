<?php
//https://www.codewars.com/kata/54e6533c92449cc251001667/train/php

$prueba = "AAAABBBCCDAABBB"; //= ABCDAB;
$prueba2 = [1, 2, 2, 3, 3];
$prueba3 = [];

function uniqueInOrder($iterable)
{
    $aux = [];
    if (is_string($iterable)) {
        $iterable = str_split($iterable);
        
    }
    if (empty($iterable)) {
        echo "hola";
        $iterable;
        
        return $iterable;
    } else {

        foreach ($iterable as $key => $value) {
            if (empty($aux)) {
                array_push($aux, $value);
            } elseif ($aux[count($aux) - 1] != $value) {
                array_push($aux, $value);

            }
        }
        return $aux;
    }
}

foreach (uniqueInOrder($prueba3) as $key => $value) {
    echo $value;
}
;
