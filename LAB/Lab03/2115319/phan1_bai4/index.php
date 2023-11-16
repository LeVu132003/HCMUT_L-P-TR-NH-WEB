<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>phan1_bai4</title>
    <style>
        table {
            border-collapse: collapse;
        }

        table,
        tr,
        td {
            border: 1px solid;
        }

        td {
            font-size: 16px;
            line-height: 1.6;
            text-align: center;
            width: 30px;
            height: 30px;
            background-color: yellow;

        }
    </style>
</head>

<body>
    <?php
    $context = "<table>";
    for ($i = 1; $i <= 7; $i++) {
        $context .= "<tr>";
        for ($j = 1; $j <= 7; $j++) {
            $context .= "<td>" . $i * $j . "</td>";
        }
        $context .= "</tr>";
    }
    $context .= "</table>";
    echo $context;
    ?>
</body>

</html>