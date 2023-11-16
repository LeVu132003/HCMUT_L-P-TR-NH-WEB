<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>phan1_bai3</title>
</head>

<body>
    <?php
    echo "a. Dùng vòng lặp for <br/>";
    for ($i = 1; $i < 100; $i += 2) {
        echo $i . "  ";
    }
    echo "<br/>b. Dùng vòng lặp while <br/>";
    $i = 1;
    while ($i < 100) {
        echo $i . "  ";
        $i += 2;
    }
    ?>
</body>

</html>