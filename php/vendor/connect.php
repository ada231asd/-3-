<?php

    $connect = mysqli_connect('localhost', 'root', '', 'club');

    if (!$connect) {
        die('Error connect to DataBase');
    }