export default () => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>MERN Kickstart</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="shortcut icon" href="/dist/favicon.ico">
        <style>
              a{
                text-decoration: none
              }
        </style>
    </head>
    <body>
        <div id="root"></div>
        <script type="text/javascript" src="/dist/bundle.js"></script>
    </body>
    </html>
    `;
};
