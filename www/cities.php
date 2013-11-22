<?php

header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");


$cities = array('London', 'New York', 'Paris', 'Milan','Rome','Adelaide','Dublin');
echo $_GET['callback'] . '('.json_encode($cities).')';

?>