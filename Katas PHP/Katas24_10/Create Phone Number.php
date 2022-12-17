<?php
//https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/php

function createPhoneNumber($numbersArray)
{
    $cadena = "(";
    for ($i = 0; $i < sizeof($numbersArray); $i++) {
        if ($i == 2) {
            $cadena = $cadena . $numbersArray[$i] . ") ";
        } elseif ($i == 5) {
            $cadena = $cadena . $numbersArray[$i] . "-";
        } else {
            $cadena = $cadena . $numbersArray[$i];
        }
    }
    return $cadena;
}
//createPhoneNumber([1,2,3,4,5,6,7,8,9,0]); // => returns "(123) 456-7890
echo createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
