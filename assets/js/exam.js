$(document).ready(function(){
    if(sessionStorage.getItem('username') === null){
        location.assign("index.html");
    }

    personName = sessionStorage.getItem("username");
    $("#startName").text("Welcome "+personName);

        let score = 0;
        function calcScore(){
            if ($("input[name='q1']:checked").val() == "A") score++;
            if ($("input[name='q2']:checked").val() == "A") score++;
            if ($("input[name='q3']:checked").val() == "B") score++;
            if ($("input[name='q4']:checked").val() == "A") score++;
            if ($("input[name='q5']:checked").val() == "D") score++;
            if ($("input[name='q6']:checked").val() == "C") score++;
            if ($("input[name='q7']:checked").val() == "B") score++;
            if ($("input[name='q8']:checked").val() == "A") score++;
            if ($("input[name='q9']:checked").val() == "A") score++;
            if ($("input[name='q10']:checked").val() == "D") score++;

            let message = "";
            if(score == 10){
                message = "Perfect score! Well done!";
            }else if(score > 8){
                message = "Great job!";
            }else if(score > 5){
                message = "Good effort!";
            }else{
                message = "Better luck next time!";
            }
            $(".message").text(message);
        }

        function Finish(){
            setTimeout(function(){
                sessionStorage.clear();
                location.assign("index.html");
            },5000);
        }

        //question1
        function startCountdown1(){
        let time1 = 1;
        const countdown1 = setInterval(function(){
            let Timer = time1 < 10 ? `00:0${time1}` : `00:${time1}`;
            $("#time1").text(Timer);
            time1++;
            if(time1 > 11){
                clearInterval(countdown1);
                $(".question1").hide();
                $(".question2").show();
                startCountdown2();
            }
        },1000);
        $("#next1").click(function(){
            clearInterval(countdown1);
            $(".question1").hide();
            $(".question2").show();
            startCountdown2();
        });
        }

        //question2
        function startCountdown2(){
            let time2 = 1;
            const countdown2 = setInterval(function(){
                let Timer = time2 < 10 ? `00:0${time2}` : `00:${time2}`;
                $("#time2").text(Timer);
                time2++;
                if(time2 > 11){
                    clearInterval(countdown2);
                    $(".question2").hide();
                    $(".question3").show();
                    startCountdown3();
                }
            },1000);
            $("#next2").click(function(){
                clearInterval(countdown2);
                $(".question2").hide();
                $(".question3").show();
                startCountdown3();
            });
        }

        //question3
        function startCountdown3(){
            let time3 = 1;
            const countdown3 = setInterval(function(){
                let Timer = time3 < 10 ? `00:0${time3}` : `00:${time3}`;
                $("#time3").text(Timer);
                time3++;
                if(time3 > 11){
                    clearInterval(countdown3);
                    $(".question3").hide();
                    $(".question4").show();
                    startCountdown4();
                }
            },1000);
            $("#next3").click(function(){
                clearInterval(countdown3);
                $(".question3").hide();
                $(".question4").show();
                startCountdown4();
            });
        }

        //question4
        function startCountdown4(){
            let time4 = 1;
            const countdown4 = setInterval(function(){
                let Timer = time4 < 10 ? `00:0${time4}` : `00:${time4}`;
                $("#time4").text(Timer);
                time4++;
                if(time4 > 11){
                    clearInterval(countdown4);
                    $(".question4").hide();
                    $(".question5").show();
                    startCountdown5();
                }
            },1000);
            $("#next4").click(function(){
                clearInterval(countdown4);
                $(".question4").hide();
                $(".question5").show();
                startCountdown5();
            });
        }      

        //question5
        function startCountdown5(){
            let time5 = 1;
            const countdown5 = setInterval(function(){
                let Timer = time5 < 10 ? `00:0${time5}` : `00:${time5}`;
                $("#time5").text(Timer);
                time5++;
                if(time5 > 11){
                    clearInterval(countdown5);
                    $(".question5").hide();
                    $(".question6").show();
                    startCountdown6();
                }
            },1000);
            $("#next5").click(function(){
                clearInterval(countdown5);
                $(".question5").hide();
                $(".question6").show();
                startCountdown6();
            });
        }

        //question6
        function startCountdown6(){
            let time6 = 1;
            const countdown6 = setInterval(function(){
                let Timer = time6 < 10 ? `00:0${time6}` : `00:${time6}`;
                $("#time6").text(Timer);
                time6++;
                if(time6 > 11){
                    clearInterval(countdown6);
                    $(".question6").hide();
                    $(".question7").show();
                    startCountdown7();
                }
            },1000);
            $("#next6").click(function(){
                clearInterval(countdown6);
                $(".question6").hide();
                $(".question7").show();
                startCountdown7();
            });
        }

        //question7
        function startCountdown7(){
            let time7 = 1;
            const countdown7 = setInterval(function(){
                let Timer = time7 < 10 ? `00:0${time7}` : `00:${time7}`;
                $("#time7").text(Timer);
                time7++;
                if(time7 > 11){
                    clearInterval(countdown7);
                    $(".question7").hide();
                    $(".question8").show();
                    startCountdown8();
                }
            },1000);
            $("#next7").click(function(){
                clearInterval(countdown7);
                $(".question7").hide();
                $(".question8").show();
                startCountdown8();
            });
        }

        //question8
        function startCountdown8(){
            let time8 = 1;
            const countdown8 = setInterval(function(){
                let Timer = time8 < 10 ? `00:0${time8}` : `00:${time8}`;
                $("#time8").text(Timer);
                time8++;
                if(time8 > 11){
                    clearInterval(countdown8);
                    $(".question8").hide();
                    $(".question9").show();
                    startCountdown9();
                }
            },1000);
            $("#next8").click(function(){
                clearInterval(countdown8);
                $(".question8").hide();
                $(".question9").show();
                startCountdown9();
            });
        }

        //question9
        function startCountdown9(){
            let time9 = 1;
            const countdown9 = setInterval(function(){
                let Timer = time9 < 10 ? `00:0${time9}` : `00:${time9}`;
                $("#time9").text(Timer);
                time9++;
                if(time9 > 11){
                    clearInterval(countdown9);
                    $(".question9").hide();
                    $(".question10").show();
                    startCountdown10();
                }
            },1000);
            $("#next9").click(function(){
                clearInterval(countdown9);
                $(".question9").hide();
                $(".question10").show();
                startCountdown10();
            });
        }

        //question10
        function startCountdown10(){
            let time10 = 1;
            const countdown10 = setInterval(function(){
                let Timer = time10 < 10 ? `00:0${time10}` : `00:${time10}`;
                $("#time10").text(Timer);
                time10++;
                if(time10 > 11){
                    clearInterval(countdown10);
                    calcScore();
                    $("#score").text(score+"/10");
                    $(".question10").hide();
                    $("#result").show();
                    Finish();
                }
            },1000);
            $("#finish").click(function(){
                clearInterval(countdown10);
                calcScore();
                $("#score").text(score+"/10");
                $(".question10").hide();
                $("#result").show();
                Finish();
            });
        }

        $("#start").click(function(){
            startCountdown1();
            $("#start").hide();
            $(".question1").show();
        })
    });