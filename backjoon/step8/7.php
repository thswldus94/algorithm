<?php
$bag = 0;
fscanf(STDIN, "%d", $total);
//$total = 18;
$s1 = 5;
$s2 = 3;

while(1) {
    // 5개로 나눠 떨어지면 끝
    if ($total % $s1 == 0) {
        echo ($total / $s1) + $bag;
        return false;
    } else if ($total <= 0) {
        echo -1;
        return false;
    }

    $total = $total - $s2;
    $bag++;
}
?>