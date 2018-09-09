<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- ВРЕМЕННО ОТКЛЮЧАЕМ КЭШИРОВАНИЕ -->
    <meta http-equiv="cache-control" content="max-age=0" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="expires" content="0" />
    <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
    <meta http-equiv="pragma" content="no-cache" />
    <!--  -->
    <title>SHRIMP</title>
    <link rel="shortcut icon" type="image/png" href="<?php echo get_template_directory_uri()?>/favicon.png"/>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link href="<?php echo get_template_directory_uri()?>/style.css" rel="stylesheet">
    <!-- <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A515376786179ad0920d0c8adb9c12113c9e51b723433e00e33af13b7e335a500&amp;width=100%25&amp;height=450&amp;lang=ru_RU&amp;scroll=false&amp;id=map"></script> -->
    <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
</head>
<body>
    <nav class="nav">
        <div class="nav__close" onclick="closeMenu()">
            <span></span>
            <span></span>
        </div>
        <ul class="nav__list">
            <li class="nav__item"><a href="#about" class="nav__item--anchor" onclick=closeMenu()>О нас</a></li>
            <li class="nav__item"><a href="#advertisers" class="nav__item--anchor" onclick=closeMenu()>Рекламодателям</a></li>
            <li class="nav__item"><a href="#streamers" class="nav__item--anchor" onclick=closeMenu()>Стримерам</a></li>
            <li class="nav__item"><a href="#contacts" class="nav__item--anchor" onclick=closeMenu()>Контакты</a></li>
        </ul>
    </nav>
    <header class="header">
        <div class="header__logo">
            <img src="<?php echo get_template_directory_uri()?>/shrimp.svg" height="60">
        </div>
        <div class="header__email">info@shrimp.gg</div>
        <div class="header__menu" onclick="openMenu()">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
    <section class="main">
        <div class="video">
            <iframe
                id="myIframe"
                src="https://www.youtube.com/embed/viSX_1dN3JU?autoplay=1&controls=0&loop=1&playlist=viSX_1dN3JU&showinfo=0&enablejsapi=1&modestbranding=1&rel=0&showinfo=0&color=white&iv_load_policy=3&theme=light&wmode=transparent&mute=1"
                frameborder="0"
                allow="autoplay"
                autoplay
                width="100%"
                height="100%"
            ></iframe>
        </div>
        <div class="helloMessage">
            <h1 class="helloMessage__title">SHRIMP</h1>
            <p class="helloMessage__text">Свежий ветер киберспортивного маркетинга. Делаем быстро и качественно!</p>
            <button class="button button--cta" onclick="focusFormFromVideo()">Сделать заказ</button>
        </div>
    </section>
    <section class="content about">
        <h1 class="background__title background__title--about">О нас</h1>
        <div class="card">
            <h3 class="card__title"><a class="card__title--anchor" name="about">Shrimp - digital-агентство по размещению рекламы у стримеров на территории СНГ</a></h3>
            <div class="card__content">
                <p class="card__text">Сколько нужно маркетологов киберспортивного направления, чтобы вкрутить лампочку? Одна Креветка. Как раз хватит, чтобы накормить кита индустрии ;)</p>
                <p class="card__text">Ориентируемся на долгосрочное сотрудничество и взаимовыгодный обмен экспертизой, а не на единовременный заработок.</p>
                <p class="card__aside">Необходимо организовать киберспортивные ивенты, провести оффлайн-мероприятия или Вас интересуют спецпроекты в этой сфере? <br/>Похоже, это бриф с первого взгляда!</p>
            </div>
        </div>
        <div class="gamepad">
            <p class="gamepad__text">Мы сформулировали для себя <span style="color: #e08342;">принципы</span> - четыре столпа, на которых базируется наша компания:</p>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1100px" height="500px" viewBox="42.2113 84.4814 805.136 330.601" preserveAspectRatio="xMidYMid meet"><rect id="svgEditorBackground" x="0" y="0" width="770" height="570" style="fill:none; stroke: none;"/><defs id="svgEditorDefs"><polygon id="svgEditorShapeDefs" style="fill:khaki;stroke:black;vector-effect:non-scaling-stroke;stroke-width:1px;"/><linearGradient id="lgrd3-fr-h" y2="0%" x2="100%" y1="0%" x1="0%" spreadMethod="pad"><stop offset="0%" stop-color="white" style="stop-opacity: 0;"/><stop offset="100%" stop-color="white"/><stop style="stop-color: white; stop-opacity: 0;"/></linearGradient></defs><polyline style="stroke:rgb(102,102,102);fill:none;stroke-width:0.2px;" id="e3_polyline" points="377.137 281 380.938 281.031 381.688 280.25 384.156 280.25 384.906 281.063 387.07 290.086" transform="matrix(21.1275 0 0 21.1275 -7973.72 -5770.81)"/><path d="M387.0703125,290.046875a2.327072,2.327072,0,0,1,-4.0078125,1.109375" style="fill:none;stroke:rgb(102,102,102);stroke-width:0.2px;" id="e4_circleArc" transform="matrix(21.1275 0 0 21.1275 -7973.72 -5770.81)"/><polyline style="stroke:rgb(102,102,102);fill:none;stroke-width:0.2px;" id="e5_polyline" points="383.094 291.195 379.813 286.219 377.137 286.219" transform="matrix(21.1275 0 0 21.1275 -7973.72 -5770.81)"/><circle id="e10_circle" cx="382.44" cy="285.352" style="fill:rgb(224,121,66); stroke: black; stroke-width:0.07px;" r="0.675722" transform="matrix(21.1275 0 0 21.1275 -7973.72 -5770.81)"/><circle id="e2_circle" cx="382.425" cy="282.743" style="fill:rgb(224,121,66); stroke: black; stroke-width:0.07px;" r="0.675722" transform="matrix(21.1275 0 0 21.1275 -7973.72 -5770.81)"/><circle id="e1_circle" cx="381.003" cy="284.055" style="fill:rgb(224,121,66); stroke: black; stroke-width:0.07px;" r="0.675722" transform="matrix(21.1275 0 0 21.1275 -7973.72 -5770.81)"/><circle id="e3_circle" cx="383.7690274672716" cy="284.02397233045275" style="fill:rgb(224,121,66); stroke: black; stroke-width:0.07px;" r="0.675722" transform="matrix(21.1275 0 0 21.1275 -7973.72 -5770.81)"/><rect x="380.405" y="282.586" style="fill:none;stroke:white;stroke-width:0.07px;" id="e13_rectangle" width="0.648438" height="0.632812" ry="0" transform="matrix(21.1275 0 0 21.1275 -7967.78 -5746.22)" rx="0"/><circle id="e14_circle" cx="383.768" cy="284.029" style="fill:none;stroke:white;stroke-width:0.08px;" r="0.433365" transform="matrix(18.7072 0 0 18.7072 -7044.82 -5083.47)"/><path d="M0,-3.464l-4,6.928h8Z" style="stroke: white; vector-effect: non-scaling-stroke; stroke-width:1.5px;fill:none;" id="e15_shape" transform="matrix(2.09204 0 0 2.09204 105.784 201.075)"/><line id="e16_line" x1="382.069" y1="285.062" x2="382.757" y2="285.742" style="stroke:white;fill:none;stroke-width:0.07px;" transform="matrix(21.1275 0 0 21.1275 -7973.39 -5771.47)"/><line id="e14_line" x1="381.96" y1="285.14" x2="382.648" y2="285.82" style="stroke:white;fill:none;stroke-width:0.07px;" transform="matrix(-20.9076 0 0 21.1275 8099.15 -5773.29)"/><polyline style="stroke:rgb(224,121,66);fill:none;stroke-width:0.09px;" id="e17_polyline" points="382.011 281.98 382.011 279.574 393.323 279.605" transform="matrix(21.1275 0 0 21.1275 -7973.72 -5771.47)"/><polyline style="stroke:rgb(224,121,66);fill:none;stroke-width:0.09px;" id="e14_polyline" points="384.047 283.246 384.047 282.548 395.889 282.579" transform="matrix(21.1275 0 0 21.1275 -7973.72 -5771.47)"/><polyline style="stroke:rgb(224,121,66);fill:none;stroke-width:0.09px;" id="e1_polyline" points="376.765 283.893 376.765 279.806 389.032 279.751" transform="matrix(21.1275 0 0 -20.8732 -7884.26 6174.53)"/><polyline style="stroke:rgb(224,121,66);fill:none;stroke-width:0.09px;" id="e15_polyline" points="379.081 283.235 387.643 283.201" transform="matrix(21.1275 0 0 -20.8732 -7884.26 6174.53)"/><circle id="e20_circle" cx="374.692138671875" cy="283.5187404994877" style="fill:white;stroke:rgb(224,121,66);stroke-width:0.07px;" r="0.3125" transform="matrix(12.8878 0 0 12.8878 -4731.52 -3463.97)"/><circle id="e4_circle" cx="378.0323791503906" cy="285.57574462890625" style="fill:white;stroke:rgb(224,121,66);stroke-width:0.07px;" r="0.3125" transform="matrix(12.8878 0 0 12.8878 -4731.52 -3463.96)"/><circle id="e5_circle" cx="372.9908142089844" cy="287.811767578125" style="fill:white;stroke:rgb(224,121,66);stroke-width:0.07px;" r="0.3125" transform="matrix(12.8878 0 0 12.8878 -4731.52 -3463.96)"/><circle id="e6_circle" cx="376.4689025878906" cy="289.19512939453125" style="fill:white;stroke:rgb(224,121,66);stroke-width:0.07px;" r="0.3125" transform="matrix(12.8878 0 0 12.8878 -4731.52 -3463.96)"/><text style="fill:black;font-family:Arial;font-size:0.5px;" x="399.021" y="280.974" id="e2_texte" transform="matrix(20.531 0 0 21.1275 -7767.31 -5770.81)" dy="" dx=""><tspan x="399.021" y="" dx="" id="e2_tspan" dy=""/></text><text style="fill:black;font-family:Arial;font-size:0.5px;" x="393.682" y="284.724" id="e1_texte" transform="matrix(20.531 0 0 21.1275 -7767.31 -5770.81)" dy="" dx=""><tspan x="393.682" y="" dx="" dy="" id="e1_tspan"/></text><text style="fill:black;font-family:Arial;font-size:0.5px;" x="397.201" y="286.849" id="e3_texte" transform="matrix(20.531 0 0 21.1275 -7767.31 -5770.81)" dy="" dx=""><tspan x="397.201" y="" dx="" dy="" id="e3_tspan"/></text><text style="fill:white;font-family:Arial;font-size:10px;" x="80.2472" y="-10.7638" id="e5_texte" transform="matrix(1 0 0 1 261.444 153.493)" dx="" dy=""><tspan x="80.2472" dx="" y="" dy="">Создание и удержание неуемных идей, в соответствии с потребностями клиента, </tspan><tspan x="80.2472" dy="1.25em" y="">позволяет приносить максимальную пользу и гордиться выполненными проектами</tspan><tspan x="80.2472" dy="1.25em"/></text><line id="e8_line" x1="335.4940185546875" y1="113.8413508971387" x2="335.4940185546875" y2="158.82104907829103" style="stroke:rgb(224,131,66); stroke-width:2px;"/><text style="fill:white;font-family:Arial;font-size:13px;font-weight:bold;" x="349.831" y="116.934" id="e9_texte" transform="matrix(1 0 0 1 -8.43369 9.55818)" dx="" dy=""><tspan x="349.831">Креатив</tspan></text><line id="e2_line" x1="390.03192138671875" y1="175.6883808533496" x2="390.03192138671875" y2="220.66808666389647" style="stroke:rgb(224,131,66); stroke-width:2px;"/><line id="e1_line" x1="306.8193858702832" y1="240.3466033935547" x2="306.8193858702832" y2="285.3265075683594" style="stroke:rgb(224,131,66); stroke-width:2px;"/><line id="e3_line" x1="335.4941711425781" y1="312.87633167106446" x2="335.4941711425781" y2="357.8556102355176" style="stroke:rgb(224,131,66); stroke-width:2px;"/><text style="fill:white;font-family:Arial;font-size:13px;font-weight:bold;" x="320.594" y="242.877" id="e4_texte" transform="matrix(1 0 0 1 -8.43369 9.55818)" dx="" dy=""><tspan x="320.594" id="e4_tspan" y="" dy="">Прозрачность</tspan></text><text style="fill:white;font-family:Arial;font-size:13px;font-weight:bold;" x="403.807" y="178.219" id="e6_texte" transform="matrix(1 0 0 1 -8.43369 9.55818)" dx="" dy=""><tspan x="403.807" id="e6_tspan" y="" dy="">Экспертиза</tspan></text><text style="fill:white;font-family:Arial;font-size:13px;font-weight:bold;" x="348.707" y="315.407" id="e7_texte" transform="matrix(1 0 0 1 -8.43369 9.55818)" dx="" dy=""><tspan x="348.707" id="e7_tspan" y="" dy="">Ответственность</tspan></text><text style="fill:white;font-family:Arial;font-size:10px;" x="134.223" y="51.0833" id="e8_texte" transform="matrix(1 0 0 1 261.444 153.493)" dx="" dy=""><tspan x="134.223" dx="" y="" dy="" id="e8_tspan"> Глубокий подход к сбору статистики и аналитических материалов позволяет подбирать</tspan><tspan x="134.223" dy="1.25em"> наиболее подходящих кандидатов и сохранять наилучшие цены</tspan><tspan x="134.223" dy="1.25em" id="e10_tspan" y=""/></text><text style="fill:white;font-family:Arial;font-size:10px;" x="79.6851" y="186.585" id="e10_texte" transform="matrix(1 0 0 1 261.444 155.742)" dx="" dy=""><tspan x="80.2474" dx="" y="" dy="" id="e11_tspan">Структурный подход к решению задач и непрерывная коммуникация с клиентом </tspan><tspan x="80.2474" dy="1.25em">исключают шанс негативного исхода кампании</tspan><tspan x="79.6851" dy="1.25em" id="e13_tspan" y=""/></text><text style="fill:white;font-family:Arial;font-size:10px;" x="51.0105" y="116.866" id="e11_texte" transform="matrix(1 0 0 1 261.444 153.493)" dx="" dy=""><tspan x="51.0105" dx="" y="" dy="" id="e14_tspan">Работа с открытыми костами предоставляет клиенту информацию за что конкретно он платит,</tspan><tspan x="51.0105" dy="1.25em">а постоянный обмен опытом - позволяет наращивать собственную экспертизу. </tspan><tspan x="51.0105" dy="1.25em" id="e16_tspan" y=""/></text></svg>
        </div>
    </section>
    <section class="content advertisers">
        <!-- <h1 class="background__title background__title--advertisers">Рекламодателям</h1> -->
        <div class="card">
            <h2 class="card__title"><a class="card__title--anchor" name="advertisers">Услуги для рекламодателей</a></h2>
            <div class="card__content">
                <p class="card__text card__text--advertisers">Мы, в Shrimp, знаем и чувствуем нюансы киберспортивной аудитории – это позволяет нам найти оптимальную стратегию по продвижению Вашего бренда, используя налаженный инструментарий.</p>
                <p class="card__text card__text--advertisers">Предоставляя разнообразный̆ спектр услуг, мы придерживаемся идеологии создания взаимной ценности с клиентом и всегда ставим его возможности и потребности выше собственных коммерческих интересов. Это снижает совокупную стоимость проекта, что делает клиента счастливее.</p>
                <ul class="card__list">
                    <li class="card__item">
                        <span class="checkmark">
                            <div class="checkmark_stem"></div>
                            <div class="checkmark_kick"></div>
                        </span>
                        Брендирование канала
                    </li>
                    <li class="card__item"><span class="checkmark">
                            <div class="checkmark_stem"></div>
                            <div class="checkmark_kick"></div>
                        </span>Проведение розыгрышей</li>
                    <li class="card__item"><span class="checkmark">
                            <div class="checkmark_stem"></div>
                            <div class="checkmark_kick"></div>
                        </span>Создание посадочных страниц</li>
                    <li class="card__item"><span class="checkmark">
                            <div class="checkmark_stem"></div>
                            <div class="checkmark_kick"></div>
                        </span>Видеогайды по проведению качественной рекламной интеграции</li>
                    <li class="card__item"><span class="checkmark">
                            <div class="checkmark_stem"></div>
                            <div class="checkmark_kick"></div>
                        </span>Медиа-материалы для реализуемой кампании</li>
                    <li class="card__item"><span class="checkmark">
                            <div class="checkmark_stem"></div>
                            <div class="checkmark_kick"></div>
                        </span>Спецпроекты</li>
                </ul>
            </div>
        </div>
        <div class="buttonContainer">
            <a target="_blank" class="button button--info" href="<?php echo get_template_directory_uri()?>/Shrimp.pdf">Презентация&nbsp;&nbsp;<i class="fas fa-external-link-alt"></i></a>
            <button class="button button--cta" onclick="focusForm()">Заказать консультацию</button>
        </div>
    </section>
    <section class="content streamers">
        <h1 class="background__title background__title--streamers">Стримерам</h1>
        <div class="card">
            <h2 class="card__title"><a name="streamers" class="card__title--anchor">Услуги для стримеров</h2></a>
            <div class="card__content">
                <p class="card__text card__text--streamers">Поможем начать стримить с нуля или подскажем как улучшить качество уже существующего канала и трансляции.  Расскажем про особенности рекламных интеграций и найдём рекламных партнеров.</p>
                <ul class="card__list">
                    <li class="card__item"><span class="checkmark">
                            <div class="checkmark_stem"></div>
                            <div class="checkmark_kick"></div>
                        </span>Поиск рекламных контрактов</li>
                    <li class="card__item"><span class="checkmark">
                            <div class="checkmark_stem"></div>
                            <div class="checkmark_kick"></div>
                        </span>Оптимизация существующих контрактов</li>
                    <li class="card__item"><span class="checkmark">
                            <div class="checkmark_stem"></div>
                            <div class="checkmark_kick"></div>
                        </span>Обучение особенностям рекламы на Twitch</li>
                    <li class="card__item"><span class="checkmark">
                            <div class="checkmark_stem"></div>
                            <div class="checkmark_kick"></div>
                        </span>Разработка уникальных фишек для канала </li>
                    <li class="card__item"><span class="checkmark">
                            <div class="checkmark_stem"></div>
                            <div class="checkmark_kick"></div>
                        </span>Визуальное и аудио-оформление канала</li>
                    <li class="card__item"><span class="checkmark">
                            <div class="checkmark_stem"></div>
                            <div class="checkmark_kick"></div>
                        </span>Создание видео контента и анимаций донатов/подписок</li>
                    <li class="card__item"><span class="checkmark">
                            <div class="checkmark_stem"></div>
                            <div class="checkmark_kick"></div>
                        </span>Аналитика трансляций, аудитории, игр и составление наилучшего расписания</li>
                    <li class="card__item"><span class="checkmark">
                            <div class="checkmark_stem"></div>
                            <div class="checkmark_kick"></div>
                        </span>Взаимный PR между каналами: совместные игры, рейды, рехосты</li>
                    <li class="card__item"><span class="checkmark">
                            <div class="checkmark_stem"></div>
                            <div class="checkmark_kick"></div>
                        </span>Реклама в пабликах и у стримеров, а также проведение розыгрышей</li>
                </ul>
            </div>
        </div>
        <div class="buttonContainer">
            <button class="button button--cta" onclick="focusForm()">Заказать консультацию</button>
        </div>
    </section>
    <section class="contacts">
        <div id="map">
            <div class="contactsContent">
                <div class="contacts__block contacts__block--info">
                    <h2 class="card__title contacts__title"><a name="contacts" class="">Контакты</a></h2>
                    <p class="contacts__contact">
                       <i class="fas fa-envelope"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                        info@shrimp.gg</p>
                    <p class="contacts__contact">
                        <i class="fab fa-telegram-plane"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                        @shrimp_info
                    </p>
                    <p class="contacts__contact"><i class="fas fa-phone"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                        +7 (915) 35-8888-6
                    </p>
                </div>
                <?php
                    $action = $_REQUEST['action'];
                    if($action == ""){?>
                <form class="contacts__block contacts__block--form" action="" method="POST" enctype="multipart/form-data">
                    <h2 class="card__title contacts__title">Оставить заявку</h2>
                    <input type="hidden" name="action" value="Submit">
                    <input class="contacts__input" id="name" required autocomplete="off" name="nomen" type="text" placeholder="Имя">
                    <input class="contacts__input" required autocomplete="off" name="contact" type="text" placeholder="Телефон/email">
                    <button class="button button--cta button--submit" type="submit">Отправить</button>
                </form>
                <?php
                    }else{
                        $contact = $_REQUEST['contact'];
                        $nomen = $_REQUEST['nomen'];
                        $subject = "Заявка с сайта";
                        $from = "From: Feedback<feedbackform@shrimp.gg>\r\n";
                        $message = "Контакт: " . $contact . ". Зовут: " . $nomen;
                        mail("vlasenkonikita@gmail.com",$subject,$message,$from);
                        echo 'Отправлен';
                    }
                ?>
            </div>
        </div>
    </section>

    <script defer src="https://use.fontawesome.com/releases/v5.0.10/js/all.js" integrity="sha384-slN8GvtUJGnv6ca26v8EzVaR9DC58QEwsIk9q1QXdCU8Yu8ck/tL/5szYlBbqmS+" crossorigin="anonymous"></script>
    <script src="<?php echo get_template_directory_uri()?>/script.js"></script>
</body>