<!--https://www.php.net/manual/es/function.array-reduce.php-->

<?php

function multiplicacion($acc, $el)
{
    $acc *= $el;
    return $acc;
}

function grow($a)
{
    return array_reduce($a, "multiplicacion", 1);
}

echo grow([1, 2, 3])
?>