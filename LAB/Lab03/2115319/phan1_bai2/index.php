<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>phan1_bai2</title>
</head>

<body>
    <?php
    function func($num)
    {
        $num = $num % 5;
        switch ($num) {
            case 0:
                echo "Hello";
                break;
            case 1:
                echo "How are you?";
                break;
            case 2:
                echo "I'm doing well, thank you";
                break;
            case 3:
                echo "See you later";
                break;
            case 4:
                echo "Good-bye";
                break;
            default:
                echo "";
                break;
        }
    }
    func(178);
    ?>
</body>

</html>