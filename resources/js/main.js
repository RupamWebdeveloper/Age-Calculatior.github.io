(()=>{
/*.............................................................
						Variable Declaration
...............................................................*/
 let current_date,current_month,current_year,button_id,GetInputData,Split_GetInputData,modify_Split_GetInputData,Age_year,Age_Month,Age_Day,Distance, Upcomming_date,Upcomming_month,Upcomming_year,day,Upcomming_Birth_Day,Months,Upcomming_day,maintain_message,machine_yearmachine_month,machine_day;
/*.............................................................
				Final calculation machine function
...............................................................*/
	const Machine=()=>{
			
			GetInputData=document.getElementById('input-id').value;
		Split_GetInputData=GetInputData.split('-');
		modify_Split_GetInputData=Split_GetInputData.map(e=>parseInt(e));
			//Checking if we submitted the all input field and year can't cross the current year also current months and current date. 
			if(modify_Split_GetInputData[0]>current_year){
					document.getElementById('ops').innerHTML='<b><em>Ops!</em></b>';
					document.getElementById('warn-aa').innerHTML='<em> You can\'t cross the current year.</em>';

					let submit=document.getElementById('button-cls');
					submit.style.backgroundColor='red';
					document.getElementById('o-1').disabled=true;
					document.getElementById('o-2').disabled=true;
					let radio=document.getElementsByClassName('Select-one')[0];
					radio.innerHTML='<em>Selected</em>';
					radio.style.color='#2ed42e';
			}

			else if((current_year===modify_Split_GetInputData[0]&&modify_Split_GetInputData[1]>current_month) || (current_year===modify_Split_GetInputData[0]&&modify_Split_GetInputData[1]===current_month&&modify_Split_GetInputData[2]>current_date)){
					document.getElementById('ops').innerHTML='<b><em>Ops!</em></b>'
					document.getElementById('warn-aa').innerHTML='<em> You can\'t cross the current date.</em>';
					let submit=document.getElementById('button-cls');
					submit.style.backgroundColor='red';
					document.getElementById('o-1').disabled=true;
					document.getElementById('o-2').disabled=true;
					let radio=document.getElementsByClassName('Select-one')[0];
					radio.innerHTML='<em>Selected</em>';
					radio.style.color='#2ed42e';
			}
			else
			{
				if(modify_Split_GetInputData[0]&&modify_Split_GetInputData[1]&&modify_Split_GetInputData[2]&&current_year>=modify_Split_GetInputData[0]){
				//Some DOM effect's
						document.getElementById('o-1').disabled=true;
						document.getElementById('o-2').disabled=true;	
						let radio=document.getElementsByClassName('Select-one')[0];
						radio.innerHTML='<em>Selected</em>';
						radio.style.color='#2ed42e';
						document.getElementById('button-cls').style.backgroundColor='green';
						let first_warn_remove=document.getElementById('id_warn');
						first_warn_remove.style.display='none';
						//Here to machine making
				if(modify_Split_GetInputData[2]===current_date&&modify_Split_GetInputData[0]===current_year&&modify_Split_GetInputData[1]===current_month-1){
					Age_Month=1;
					Age_year=0;
					Age_Day=0;
					console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
			}
			else if(modify_Split_GetInputData[2]>current_date&&modify_Split_GetInputData[1]===current_month&&modify_Split_GetInputData[0]===current_year-1){
							Age_year=0;
							Age_Month=12-1;
							Day=modify_Split_GetInputData[2]-current_date;
							Age_Day=(30-Day)+1;
							console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
					}
			else if(modify_Split_GetInputData[2]===current_date&&modify_Split_GetInputData[1]>current_month&&modify_Split_GetInputData[0]===current_year-1){
							Age_year=0;
							Age_Day=0;
							Distance=modify_Split_GetInputData[1]-current_month;
							Age_Month=12-Distance;
							console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
					}
			else if(modify_Split_GetInputData[2]===current_date&&current_year>modify_Split_GetInputData[0]&&modify_Split_GetInputData[1]>current_month&&modify_Split_GetInputData[0]!==current_year-1){
							Age_Day=0;
							Distance=modify_Split_GetInputData[1]-current_month;
							Age_Month=12-Distance;
							Age_year=current_year-modify_Split_GetInputData[0]-1;
							console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
					}
			else if(modify_Split_GetInputData[0]===current_year&&modify_Split_GetInputData[2]===current_date&&current_month>modify_Split_GetInputData[1]&&modify_Split_GetInputData[1]!==current_month-1){
						Age_Day=0;
						Age_Month=current_month-modify_Split_GetInputData[1];
						Age_year=0;
						console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
					}
			else if(current_date===modify_Split_GetInputData[2]&&modify_Split_GetInputData[1]===current_month&&current_date&&(modify_Split_GetInputData[0]===current_year||current_year>modify_Split_GetInputData[0])){
					Age_Day=0;
					Age_Month=0;
					Age_year=current_year-modify_Split_GetInputData[0];
				console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
					}
			else if(modify_Split_GetInputData[2]===current_date&&modify_Split_GetInputData[0]!==current_year&& current_year>modify_Split_GetInputData[0]&&modify_Split_GetInputData[1]===current_month-1){
				Age_year=current_year-modify_Split_GetInputData[0];
				Age_Day=0;
				Age_Month=1;
					console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
			}

			else if(modify_Split_GetInputData[2]!==current_date&&current_year>=modify_Split_GetInputData[0]){
				if(current_date>modify_Split_GetInputData[2]&&modify_Split_GetInputData[1]===current_month){
					Age_Day=current_date-modify_Split_GetInputData[2];
					Age_Month=0;
					Age_year=current_year-modify_Split_GetInputData[0];
					console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
				}
				if(current_date>modify_Split_GetInputData[2]&&modify_Split_GetInputData[1]>current_month&&modify_Split_GetInputData[0]!==current_year){
					Age_Day=current_date-modify_Split_GetInputData[2];
					Distance=modify_Split_GetInputData[1]-current_month;
					Age_Month=12-Distance;
					Age_year=current_year-modify_Split_GetInputData[0]-1;
					console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
				}
				else if(current_date>modify_Split_GetInputData[2]&&modify_Split_GetInputData[1]<current_month){

					        Age_Day=current_date-modify_Split_GetInputData[2];
							Age_year=current_year-modify_Split_GetInputData[0];
							Age_Month=current_month-modify_Split_GetInputData[1];
							console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
				}
				else if(current_date<modify_Split_GetInputData[2]&&modify_Split_GetInputData[1]===current_month&&modify_Split_GetInputData[0]!==current_year&&modify_Split_GetInputData[0]!==current_year-1){
					Day=modify_Split_GetInputData[2]-current_date;
					Age_Day=(30-Day)+1;
					Age_Month1=12-modify_Split_GetInputData[1];
					Age_Month2=12-current_month;
					Age_Month=(Age_Month2+Age_Month1)-1;
					Age_year=current_year-modify_Split_GetInputData[0]-1;
					console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
				}
				else  if(current_date<modify_Split_GetInputData[2]&&modify_Split_GetInputData[1]!==current_month&&(modify_Split_GetInputData[0]!==current_year||modify_Split_GetInputData[0]===current_year)){
					if(current_month>modify_Split_GetInputData[1]&&modify_Split_GetInputData[0]===current_year&&current_month-1===modify_Split_GetInputData[1]){
						Day=modify_Split_GetInputData[2]-current_date;
						Age_Day=(30-Day)+1;
						Age_Month=0;
						Age_year=0;

						console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
				}
					else if(current_month>modify_Split_GetInputData[1]&&modify_Split_GetInputData[0]===current_year&&current_month-1!==modify_Split_GetInputData[1]){
						Day=modify_Split_GetInputData[2]-current_date;
						Age_Day=(30-Day)+1;
						Age_Month=current_month-modify_Split_GetInputData[1]-1;
						Age_year=0;
						console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
					}
					else if(current_month>modify_Split_GetInputData[1]&&modify_Split_GetInputData[0]!==current_year){
						Day=modify_Split_GetInputData[2]-current_date;
						Age_Day=(30-Day)+1;
						Age_Month=current_month-modify_Split_GetInputData[1]-1;
						Age_year=current_year-modify_Split_GetInputData[0];
						console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);
					}
					else if(modify_Split_GetInputData[1]>current_month&&modify_Split_GetInputData[0]<current_year){
						Day=modify_Split_GetInputData[2]-current_date;
						Age_Day=(30-Day)+1;
						Distance=modify_Split_GetInputData[1]-current_month;
						Age_Month=(12-Distance)-1;
						Age_year=current_year-modify_Split_GetInputData[0]-1;
						console.log(`year=${Age_year} months=${Age_Month} days=${Age_Day}`);


					}
				}}
			//Results in Age_year,Age_Month,Age_Day



			//Upcomminng birth day calculation
			Upcomming_month1=modify_Split_GetInputData[1];
			Upcomming_date1=modify_Split_GetInputData[2];
			//its ok not required any changes
			Upcomming_year=current_year+1;

			//For Months
			Months=['January','February','March','April','May','Jun','July','August','September','October','November','December'];

			Upcomming_Birth_Day=new Date(`${Months[Upcomming_month1-1]} ${Upcomming_date1} ${Upcomming_year}`);
			//For Days
			day=['Sunday','Monday','Tuesday','Wednessday','Thrusday','Friday','Saturday'];
			Upcomming_day=day[Upcomming_Birth_Day.getDay()];
			Upcomming_year=current_year+1;
			Upcomming_month=Months[Upcomming_month1-1];
			console.log(Upcomming_date1,Upcomming_day,Upcomming_month,Upcomming_year);
				//Results in Upcomming_day,Upcomming_month,Upcomming_year,Upcomming_date1



			//DOM updation with adding new html element
					maintain_message=document.getElementsByClassName('section-two-class-span-2')[0];
					maintain_message.innerHTML="<em> Good you successfully maintained the format </em>";
					maintain_message.style.color='#2ed42e';
					//Machine for code block
					let code_block=false;
						if(machine_day===modify_Split_GetInputData[2]&&machine_month===modify_Split_GetInputData[1]&&machine_year===modify_Split_GetInputData[0]){
							code_block=true;
						}

						if(code_block===false){


						const success=()=>{
							setTimeout(()=>{
								let message1='<div class="w3-container w3-center w3-animate-left"><div class="alert alert-success alert-dismissible fade show" id="success-id"><strong>Success!</strong> Your input has been <span id="sent_success"> sent successfully.</span></div></div>';
								let access1=document.getElementById('empty');
								access1.insertAdjacentHTML('afterbegin',message1);	
							},500);
						}
						//your age interface
					const cu_final_age=()=>{
							setTimeout(()=>{
								let k1,k2,k3,k4,message2;
								 k1='<div class="w3-container w3-center w3-animate-left" id="remove_age"><div class="alert alert-info" id="info-id"><strong>Info!</strong> Your Age Is:<em id="age_current"> %cur_year% Years %cur_months% Months %cur_day% Days </em</div</div>';
								k2=k1.replace('%cur_year%',Age_year);
								k3=k2.replace('%cur_months%',Age_Month);
								k4=k3.replace('%cur_day%',Age_Day);
								message2=document.getElementById('success-id');
								message2.insertAdjacentHTML('afterend',k4);


							},1000);
						}
						//upcomming
						const upcomming_birth_full=()=>{
							setTimeout(()=>{
								let kk1,kk2,kk3,kk4,kk5,message3;
								kk1='<div class="heart" id="info-id-b"><div class="w3-container w3-center w3-animate-left"><div class="alert alert-info" id="info-id bb"><strong>Upcomming</strong> Birthday:<em id="Upcomming_Birthday"> %up_date% %up_month%  %up_year% %up_day%</em></div></div></div>';
								kk2=kk1.replace('%up_day%',Upcomming_day);
								kk3=kk2.replace('%up_month% ',Upcomming_month);
								kk4=kk3.replace('%up_year%',Upcomming_year);
								kk5=kk4.replace('%up_date%',Upcomming_date1);
									message3=document.getElementById('info-id');
								message3.insertAdjacentHTML('afterend',kk5);


							},1500);
						}


						//for code block 
							machine_year=modify_Split_GetInputData[0];
							machine_month=modify_Split_GetInputData[1];
							machine_day=modify_Split_GetInputData[2];

						//for call to add the interface
						const call_message=()=>{
							success();
						cu_final_age();
						upcomming_birth_full();
						}
						call_message();
					}
		}
			else{
				let submit=document.getElementById('button-cls');
				submit.style.backgroundColor='red';
			}
	}
}//here our main function machine end 
	
	//when we click the date input field(reset everything like normal)
		document.getElementById('input-id').addEventListener('click',()=>{
			let date_after=document.getElementsByClassName('section-two-class-span-2')[0];
			date_after.innerHTML='(*Please maintain the format like dd-mm-year)';
			date_after.style.color='red';
			document.getElementById('o-1').disabled=false;
			document.getElementById('o-2').disabled=false;
			let gender_next=document.getElementsByClassName('Select-one')[0];
			gender_next.innerHTML='(*Select&mdash;one)';
			gender_next.style.color='red';
			
			//for success message remove
			console.log(Age_Month,Age_year,Age_Day);
			if(Age_year>=0&&Age_Month>=0&&Age_Day>=0){
			document.getElementsByClassName('w3-container w3-center w3-animate-left')[0].style.display='none';
			document.getElementById('remove_age').style.display='none';
			document.getElementById('info-id-b').style.display='none';
				first_warn_remove2=document.getElementById('id_warn');
				first_warn_remove2.style.display='block';
				machine_year=false;
				machine_month=false;
				machine_day=false;
				
			}
			document.getElementById('ops').innerHTML='Warning! '
			document.getElementById('warn-aa').innerHTML=' Please enter you date of birth.';
			
			
		});
	
	
	
	
//for current date
current_date=new Date().getDate();
//for current month
current_month=new Date().getMonth()+1;
//for current year
current_year=new Date().getFullYear();

//for submit button
button_id=document.getElementById('button-cls');
button_id.addEventListener('click',Machine);
//For enter key press
document.addEventListener('keypress',(e)=>{
	if(e.keyCode===13){
		Machine();
	}
});

	
})();