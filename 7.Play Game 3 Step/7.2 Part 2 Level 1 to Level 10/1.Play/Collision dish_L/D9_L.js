﻿#pragma strict

var scoreCount_L1 : int = 0; 				//Count Score Item 1
var scoreCount_L2 : int = 0; 				//Count Score Item 2
var scoreCount_L3 : int = 0; 				//Count Score Item 3
var scoreCount_L4 : int = 0;				//Count Score Item 4
var scoreCount_L5 : int = 0; 				//Count Score Item 5
var scoreCount_L6 : int = 0; 				//Count Score Item 6
var scoreCount_L7 : int = 0;				//Count Score Item 7
var scoreCount_L8 : int = 0;				//Count Score Item 8
var scoreCount_L9 : int = 0;				//Count Score Item 9
var scoreCount_L10 : int = 0;				//Count Score Item 10
//---------------------------------------------------------------------------------------------------------->
var Trigger : AudioClip;								//Click Sound
var isPlayingAudio : boolean = false; 					//Check Play Audio by using Toggle
//---------------------------------------------------------------------------------------------------------->
var scoreResult_left: int;									//Score Result
var textScore: TextMesh = new TextMesh();				//Show Score on Text Mesh
//---------------------------------------------------------------------------------------------------------->
/*
var scoreI1 : int = 150;   = 4G
var scoreI2 : int = 150;   = 4G
var scoreI3 : int = 150;   = 4G
var scoreI4 : int = 150;   = 4G
var scoreI5 : int = 150;   = 4G
var scoreI6 : int = 150;   = 4G 
var scoreI7 : int = 100;   = 1G 
var scoreI8 : int = 100;   = 1G 
var scoreI9 : int = 100;   = 1G 
var scoreI10 : int = 200;  = 32G 
*/	

function OnTriggerEnter (other : Collider) {		
	if(other.tag == "cube1")	
	{
		isPlayingAudio = true;				//Audio Play
        audio.clip = Trigger;				
        audio.Play();	
        
		scoreCount_L1 += 4;
		Destroy(other.gameObject);
		scoreResultLevel9();
	}
	else if(other.tag == "cube2")	
	{
		isPlayingAudio = true;				//Audio Play
        audio.clip = Trigger;				
        audio.Play();
        	
		scoreCount_L2 += 4;
		Destroy(other.gameObject);
		scoreResultLevel9();
	}
	else if(other.tag == "cube3")	
	{
		isPlayingAudio = true;				//Audio Play
        audio.clip = Trigger;				
        audio.Play();	
        
		scoreCount_L3 += 4;
		Destroy(other.gameObject);
		scoreResultLevel9();
	}
	else if(other.tag == "cube4")	
	{
		isPlayingAudio = true;				//Audio Play
        audio.clip = Trigger;				
        audio.Play();
        	
		scoreCount_L4 += 4;
		Destroy(other.gameObject);
		scoreResultLevel9();
	}
	else if(other.tag == "cube5")	
	{
		isPlayingAudio = true;				//Audio Play
        audio.clip = Trigger;				
        audio.Play();
        	
		scoreCount_L5 += 4;
		Destroy(other.gameObject);
		scoreResultLevel9();
	}
	else if(other.tag == "cube6")	
	{
		isPlayingAudio = true;				//Audio Play
        audio.clip = Trigger;				
        audio.Play();
        	
		scoreCount_L6 += 4;
		Destroy(other.gameObject);
		scoreResultLevel9();
	}
	else if(other.tag == "cube7")	
	{
		isPlayingAudio = true;				//Audio Play
        audio.clip = Trigger;				
        audio.Play();	
        
		scoreCount_L7 += 1;
		Destroy(other.gameObject);
		scoreResultLevel9();
	}
	else if(other.tag == "cube8")	
	{
		isPlayingAudio = true;				//Audio Play
        audio.clip = Trigger;				
        audio.Play();
        	
		scoreCount_L8 += 1;
		Destroy(other.gameObject);
		scoreResultLevel9();
	}
	else if(other.tag == "cube9")	
	{
		isPlayingAudio = true;				//Audio Play
        audio.clip = Trigger;				
        audio.Play();
        	
		scoreCount_L9 += 1;
		Destroy(other.gameObject);
		scoreResultLevel9();
	}
	else if(other.tag == "cube10")	
	{
		isPlayingAudio = true;				//Audio Play
        audio.clip = Trigger;				
        audio.Play();
        	
		scoreCount_L10 += 32;
		Destroy(other.gameObject);
		scoreResultLevel9();
	}
}

function scoreResultLevel9() {
	scoreResult_left = scoreCount_L1 + scoreCount_L2 + scoreCount_L3 + scoreCount_L4
					+ scoreCount_L5 + scoreCount_L6 + scoreCount_L7 + scoreCount_L8
					+ scoreCount_L9 + scoreCount_L10;
	textScore.text = scoreResult_left.ToString() + "g.";
}

function gameOver() {
	PlayerPrefs.GetInt("ScoreItem1-P2L9");						//My Score Item 1
	PlayerPrefs.SetInt("ScoreItem1-P2L9", scoreCount_L1);
	//*******************************************************************************************
	PlayerPrefs.GetInt("ScoreItem2-P2L9");						//My Score Item 2
	PlayerPrefs.SetInt("ScoreItem2-P2L9", scoreCount_L2);
	//*******************************************************************************************
	PlayerPrefs.GetInt("ScoreItem3-P2L9");						//My Score Item 3
	PlayerPrefs.SetInt("ScoreItem3-P2L9", scoreCount_L3);
	//*******************************************************************************************
	PlayerPrefs.GetInt("ScoreItem4-P2L9");						//My Score Item 4
	PlayerPrefs.SetInt("ScoreItem4-P2L9", scoreCount_L4);
	//*******************************************************************************************
	PlayerPrefs.GetInt("ScoreItem5-P2L9");						//My Score Item 5
	PlayerPrefs.SetInt("ScoreItem5-P2L9", scoreCount_L5);
	//*******************************************************************************************
	PlayerPrefs.GetInt("ScoreItem6-P2L9");						//My Score Item 6
	PlayerPrefs.SetInt("ScoreItem6-P2L9", scoreCount_L6);
	//*******************************************************************************************
	PlayerPrefs.GetInt("ScoreItem7-P2L9");						//My Score Item 7
	PlayerPrefs.SetInt("ScoreItem7-P2L9", scoreCount_L7);
	//*******************************************************************************************
	PlayerPrefs.GetInt("ScoreItem8-P2L9");						//My Score Item 8
	PlayerPrefs.SetInt("ScoreItem8-P2L9", scoreCount_L8);
	//*******************************************************************************************
	PlayerPrefs.GetInt("ScoreItem9-P2L9");						//My Score Item 9
	PlayerPrefs.SetInt("ScoreItem9-P2L9", scoreCount_L9);
	//*******************************************************************************************
	PlayerPrefs.GetInt("ScoreItem10-P2L9");						//My Score Item 10
	PlayerPrefs.SetInt("ScoreItem10-P2L9", scoreCount_L10);
	//*******************************************************************************************
	
	PlayerPrefs.GetInt("ScoreLevel_P2L9");						//My Score
	PlayerPrefs.SetInt("ScoreLevel_P2L9", scoreResult_left);
}