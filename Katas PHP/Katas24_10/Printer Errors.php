<?php

//https://www.codewars.com/kata/56541980fa08ab47a0000040/train/php

function printerError($s)
{
    $max = strlen($s);
    $errores = 0;

    for ($i = 0; $i < $max; $i++) {
        $valor = ord($s[$i]);
        echo "<p>$valor</p>";
        if ($valor < ord('a') || $valor > ord('m')) {
            $errores++;
        }

    }
    return $errores . "/" . $max;
}

echo printerError("aaaxbbbbyyhwawiwjjjwwm");
