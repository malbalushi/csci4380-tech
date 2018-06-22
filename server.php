<?php

require_once 'MySQLiDb.php';


define('BASE_PATH', dirname(dirname(__FILE__)));
define('APP_FOLDER', 'eventmanager');
define('CURRENT_PAGE', basename($_SERVER['REQUEST_URI']));

define('DB_HOST', "localhost");
define('DB_USER', "root");
define('DB_PASSWORD', "");
define('DB_NAME', "eventmanager");

function getDbInstance()
{
	return new MysqliDb(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME); 
}

if($_SERVER['REQUEST_METHOD'] == 'GET')
{
    $connection = getDbInstance();
    $events = $connection->get('eventmanager');
    echo json_encode($events);
}
else if($_SERVER['REQUEST_METHOD'] == 'POST')
{
    $connection = getDbInstance();
    $new_event = $connection->insert('eventmanager', $_POST);
}
?>