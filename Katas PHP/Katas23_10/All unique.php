<!--https://www.codewars.com/kata/553e8b195b853c6db4000048/train/php-->

<?php

function hasUniqueChars($string)
{
    $posicion = [];
    $unico = "true";
    for ($i = 0; $i < strlen($string); $i++) {

        if (in_array(ord(substr($string, $i, 1)), $posicion)) {
            $unico = "false";
            break;
        }
        array_push($posicion, ord(substr($string, $i, 1)));
    }
    return $unico;
}

echo hasUniqueChars("abca");
?>