<!--https://www.codewars.com/kata/5513795bd3fafb56c200049e/php-->

<?php

function countBy($x, $n)
{
    $z = [];
    for ($i = 1; $i <= $n; $i++) {
        array_push($z, $x * $i);
    }

    return $z;
}

echo implode(countBy(1, 10));
?>

