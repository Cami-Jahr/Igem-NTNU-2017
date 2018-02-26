$(function () {
    var menu = $("#menu");
    // Dynamically append the menu to the menu id on document ready
    menu.append('<div id="cssmenu">\n' +
        // Menu is ordered left to right
        '            <ul>\n' +
        '                <li id="menu_Home">\n' +
        '                    <a href="http://2017.igem.org/Team:NTNU_Trondheim">\n' +
        '                        <div>\n' +
        '                           <span>\n' +
        '                               Home\n' +
        '                           </span>\n' +
        '                        </div>\n' +
        '                    </a>\n' +
        '                </li>\n' +
        '                <li id="menu_Safety">\n' +
        '                    <a href="http://2017.igem.org/Team:NTNU_Trondheim/Safety">\n' +
        '                        <div>\n' +
        '                            <span>\n' +
        '                                Safety\n' +
        '                            </span>\n' +
        '                        </div>\n' +
        '                    </a>\n' +
        '                </li>\n' +
        '                <li id="menu_Parts">\n' +
        '                    <a href="http://2017.igem.org/Team:NTNU_Trondheim/Parts">\n' +
        '                        <div>   \n' +
        '                            <span>\n' +
        '                                Parts\n' +
        '                            </span>\n' +
        '                        </div>\n' +
        '                    </a>\n' +
        '                </li>\n' +
        '                <li id="menu_Project" class="has-sub">\n' +
        '                    <div>\n' +
        '                        <span>\n' +
        '                            Project\n' +
        '                        </span>\n' +
        '                    </div>\n' +
        '                    <ul>\n' +
        '                        <li id="menu_Description">\n' +
        '                            <a href="http://2017.igem.org/Team:NTNU_Trondheim/Description">\n' +
        '                                <span>\n' +
        '                                    Description\n' +
        '                                </span>\n' +
        '                            </a>\n' +
        '                        </li>\n' +
        '                        <li id="menu_Background">\n' +
        '                            <a href="http://2017.igem.org/Team:NTNU_Trondheim/Background">\n' +
        '                                <span>\n' +
        '                                    Background\n' +
        '                                </span>\n' +
        '                            </a>\n' +
        '                        </li>\n' +
        '                        <li id="menu_Results">\n' +
        '                            <a href="http://2017.igem.org/Team:NTNU_Trondheim/Results">\n' +
        '                                <span>\n' +
        '                                    Results\n' +
        '                                </span>\n' +
        '                            </a>\n' +
        '                        </li>\n' +
        '                        <li id="menu_Contribution">\n' +
        '                            <a href="http://2017.igem.org/Team:NTNU_Trondheim/Contribution">\n' +
        '                                <span>\n' +
        '                                    Contribution\n' +
        '                                </span>\n' +
        '                            </a>\n' +
        '                        </li>\n' +
        '                        <li id="menu_Demonstrate">\n' +
        '                            <a href="http://2017.igem.org/Team:NTNU_Trondheim/Demonstrate">\n' +
        '                                <span>\n' +
        '                                    Demonstrate\n' +
        '                                </span>\n' +
        '                            </a>\n' +
        '                        </li>\n' +
        '                        <li id="menu_Modeling">\n' +
        '                            <a href="http://2017.igem.org/Team:NTNU_Trondheim/Model">\n' +
        '                                <span>\n' +
        '                                    Modeling\n' +
        '                                </span>\n' +
        '                            </a>\n' +
        '                        </li>\n' +
        '                        <li id="menu_Lab_Journal">\n' +
        '                            <a href="http://2017.igem.org/Team:NTNU_Trondheim/Notebook">\n' +
        '                                <span>\n' +
        '                                    Lab Journal\n' +
        '                                </span>\n' +
        '                            </a>\n' +
        '                        </li>\n' +
        '                        <li id="menu_Protocols">\n' +
        '                            <a href="http://2017.igem.org/Team:NTNU_Trondheim/Experiments">\n' +
        '                                <span>\n' +
        '                                    Protocols\n' +
        '                                </span>\n' +
        '                            </a>\n' +
        '                        </li>\n' +
        '                    </ul>\n' +
        '                </li>\n' +
        '                <li id="menu_Human_practices" class="has-sub">\n' +
        '                    <div>\n' +
        '                        <span>\n' +
        '                            Human practices\n' +
        '                        </span>\n' +
        '                    </div>\n' +
        '                    <ul>\n' +
        '                        <li id="menu_Human_practice">\n' +
        '                            <a href="http://2017.igem.org/Team:NTNU_Trondheim/HP/Silver">\n' +
        '                                <span>\n' +
        '                                    Human practice\n' +
        '                                </span>\n' +
        '                            </a>\n' +
        '                        </li>\n' +
        '                        <li id="menu_Public_engagement">\n' +
        '                            <a href="http://2017.igem.org/Team:NTNU_Trondheim/Engagement">\n' +
        '                                <span>\n' +
        '                                    Public engagement\n' +
        '                                </span>\n' +
        '                            </a>\n' +
        '                        </li>\n' +
        '                    </ul>\n' +
        '                </li>\n' +
        '                <li id="menu_People" class="has-sub">\n' +
        '                    <div>\n' +
        '                        <span>\n' +
        '                            People\n' +
        '                        </span>\n' +
        '                    </div>\n' +
        '                    <ul>\n' +
        '                        <li id="menu_Team">\n' +
        '                            <a href="http://2017.igem.org/Team:NTNU_Trondheim/Team">\n' +
        '                                <span>\n' +
        '                                    Team\n' +
        '                                </span>\n' +
        '                            </a>\n' +
        '                        </li>\n' +
        '                        <li id="menu_Collaborations">\n' +
        '                            <a href="http://2017.igem.org/Team:NTNU_Trondheim/Collaborations">\n' +
        '                                <span>\n' +
        '                                    Collaborations\n' +
        '                                </span>\n' +
        '                            </a>\n' +
        '                        </li>\n' +
        '                        <li id="menu_Attributions">\n' +
        '                            <a href="http://2017.igem.org/Team:NTNU_Trondheim/Attributions">\n' +
        '                                <span>\n' +
        '                                    Attributions\n' +
        '                                </span>\n' +
        '                            </a>\n' +
        '                        </li>\n' +
        '                        <li id="menu_Sponsors">\n' +
        '                            <a href="http://2017.igem.org/Team:NTNU_Trondheim/People/Sponsors">\n' +
        '                                <span>\n' +
        '                                    Sponsors\n' +
        '                                </span>\n' +
        '                            </a>\n' +
        '                        </li>\n' +
        '                    </ul>\n' +
        '                </li>\n' +
        '                <li id="menu_Awards" class="has-sub">\n' +
        '                    <div>\n' +
        '                        <span>\n' +
        '                            Awards\n' +
        '                        </span>\n' +
        '                    </div>\n' +
        '                    <ul>\n' +
        '                        <li id="menu_Achievements">\n' +
        '                            <a href="http://2017.igem.org/Team:NTNU_Trondheim/Achievements">\n' +
        '                                <span>\n' +
        '                                    Achievements\n' +
        '                                </span>\n' +
        '                            </a>\n' +
        '                        </li>\n' +
        '                        <li id="menu_Applied_Design">\n' +
        '                            <a href="http://2017.igem.org/Team:NTNU_Trondheim/Applied_Design">\n' +
        '                                <span>\n' +
        '                                    Applied Design\n' +
        '                                </span>\n' +
        '                            </a>\n' +
        '                        </li>\n' +
        '                        <li id="menu_Hardware">\n' +
        '                            <a href="http://2017.igem.org/Team:NTNU_Trondheim/Hardware">\n' +
        '                                <span>\n' +
        '                                    Hardware\n' +
        '                                </span>\n' +
        '                            </a>\n' +
        '                        </li>\n' +
        '                    </ul>\n' +
        '                </li>\n' +
        '            </ul>\n' +
        '        </div>'
    );
    menu.find("#menu_" + menu.attr("attribute")).addClass("active");  // Adds the active class to the correct element
});