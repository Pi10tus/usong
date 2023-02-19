<?php
    require_once "connect.php";

    function GetLogin (){
        global $mysql;
        connectDB();
        $result = $mysql->query("SELECT * FROM 'login' ORDER BY 'id' DESC LIMIT $limit")
        closeDB();
        return resultToArry($result);
    }
    function resultToArray($result){
        $array = array();
        while(($rom=$result->fetch_assoc())!=false)
            $array[]=$row;
        return array;
    }
?>