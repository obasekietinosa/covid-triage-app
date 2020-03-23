<?php

$a = file_get_contents('https://covid19-triage.firebaseio.com/results.json');
$b = array_values((array)json_decode($a));

// print_r($b);die();

header('Content-Type: text/csv');
header('Content-Disposition: attachment; filename="covid19-triage-responses-'. date('d-m-Y') .'.csv"');


$fp = fopen('php://output', 'wb');
fputcsv($fp, ['Do you have fever?', 'Do you have a cough?', 'Do you have difficulty breathing?', 'Travelled or had contact with countries with 1000+ cases', 'Close contact with confirmed nCOV case?', 'Vicinity of suspected case?', 'exposed to a healthcare facility where nCOV cases were reported?'], ',');

foreach ($b as $entry) {
    fputcsv($fp,  $entry->answers, ',');
}

fclose($fp);