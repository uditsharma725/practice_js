#include<bits/stdc++.h>
#define ll long long
#define dd double
#define ff float
#define u_map unordered_map
#define u_set unordered_set
#define lb lower_bound
#define up upper_bound
#define nl "\n"
using namespace std;

// INPUT LIMIT = 712

int main()
{   
    int value;
    cin >> value;
    if(value>712 || value<1){
        cout << "ERROR";
        exit(0);
    }
    srand(time(0));

    cout << "ARTIST TABLE \n";
    cout << "Artist ID" << " " << "Artist Name" << nl;
    int artist_table=0;
    int artist_id; 
    vector<int> artist;
    string artist_name[50] = {"Mohammed Rafi","Kishore Kumar","Arijit Singh","sonu nigam",
    "udit narayan","a.r. rahman","kumar sanu","mukesh","jubin nautiya","jagjit singh",
    "s,p, balasubrahmanyam","javed ali","armaan malik","sukhwinder singh","shaan",
    "shankar mahadevan","mohammed aziz","ayushmann khurrana","talat mahmood","badshah",
    "yo yo honey sing","manna dey","himesh reshammiya","k.j. yesudas",
    "ustad bade ghulam ali khan","kk","hariharan","tansen","kailash kher","adnan sami",
    "mahendra kapoor","vinod rathod","darshan raval","lucky ali","ankit tiwari","vishal dadlani",
    "papon","shabbir kumar","nitin mukesh","pankaj udhas","mohammed irfan ali","mohit chauhan",
    "baabul supriyo","suresh wadkar","b praak","benny dayal","raftaar","alla rakha",
    "nakash aziz","mika singh"};
    while(artist_table != value){
        artist_id = rand()%100000;
        int random_name = rand()%49;
        artist.push_back(artist_id);
        cout << "("
        << '"' << artist_id << '"' << ","
        << '"' << artist_name[random_name] << '"'
        << "),\n";
        artist_table++;
    }

    cout << nl << nl;
    
    cout << "ALBUM TABLE \n";
    cout << "Album ID" << " " << "Artist ID" << " " << "Album Name" << nl;
    string album_name[26] = {"A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"}; 
    int album_table=0;
    int album_id; vector< pair<int,int> > album;
    while(album_table != value){
        int name = rand()%26;
        album_id = rand()%100000;
        int random = rand()%value;
        int artist_id = artist[random]; 
        album.push_back({album_id,artist_id});
        cout << "("
        << '"' << album_id << '"' << ","
        << '"' << artist[random] << '"' << ","
        << '"' << album_name[name] << '"'
        << "),\n";
        album_table++;
    }   

    cout << nl << nl;
    
    cout << "TRACK TABLE\n";
    cout << "Track ID" << " " << "Album ID" << " " << "Artist ID" << " " << "Track Name" << " " << "Time" << nl;
    string track_name[94] = { "Aaj Se Teri", "Tere Mere", "Main Tere Kabil Hoon", "Enna Sona","Humsafar" ,
    "Lambiyaan Si Judaiyan" ,"Ban Ja Rani" ,"Nazm Nazm" ,"Aa Jao Meri Tamanna", 
    "Aaj Din Chadheya" ,"Aaja Sanam Madhur Chandni Mein", "Abhi Na Jao Chodkar K Dil Abhi",
    "Ae Mere Humsafar","Adayein Bhi Hain Mohabbat Bhi Hai","Agar Tum Mil Jao",
    "Akele Hain Toh Kya Gham Hai" ,"Ankhiyon Ke Jharokhon Se" ,"Are Re Are Ye Kya Hua",
    "Ajeeb Dastaan Hai Yeh" ,"Ae Dil Hai Mushkil" ,"Agar Tum Saath Ho",
    "Aaja Piya Tohe Pyaar Du","Baharon Phool Barsao","Bade Ache Lagte Hai",
    "Baahon Mein Chale Aao","Bahara Bahara" ,"Bahut Pyar Karte Hain",
    "Bheegi Si Bhaagi Si" ,"Bin Tere Kya Hai Jeena" ,"Bol Na Halke Halke",
    "Be Intehaan" ,"Bol Do Na Zara" ,"Chand Ne Kuch Kaha","Chanda Re",
    "Chandni Raat Hai Tu Mere" ,"Chand Si Mehboba Hogi Meri","Chupana Bhi Nahi Aata",
    "Chahu Main Ya Na","Chura Liya Hai Tumne Jo Dil Ko" ,"Chori Kiya Re Jiya",
    "Dehka Jo Tumko" ,"Dekha Hai Pehli Baar","Dekha Ek Khwab" ,"Dhadkan Jara Ruk Gayi Hai",
    "Dheeme Dheeme","Dheere Dheere Pyaar Ko" ,"Dheere Dheere Se Meri Zindagi",
    "Dhal Gaya Din Ho Gayi Sham","Dil Deewana","Dil Hai Ki Maanta Nahi" ,"Dil Se Mere",
    "Dil Se Re" ,"Dil Hai Ke Manta Nahin" ,"Dil To Hai Dil Dil Ka Aitbar",
    "Dil Vil Pyar Vyar" ,"Dil Kya Kare Jab Kisese" ,"Dil Ka Aalam" ,
    "Diwana Huwa Badal" ,"Do Dil Mil Rahe Hai" ,"Dooba Dooba" ,"Duniya Na Bhaye Mujhe",
    "Ek Ladki Bheegi Bhaagi Se" ,"Ek Din Teri Raahon Mein" ,"Ek Sanam Chahiye Aashiqui Ke Liye",
    "Ek Ajnabee Haseena Se Yu Mulaqat","Ek Din Aap Humko","Gunguna Rahe Hai" ,"Ghar Se Nikalte Hi",
    "Gulabi Ankhen Jo Teri Dekhi","Ho Nahi Sakta" ,"Hai Mera Dil" ,"Haye Re Haye" ,"Hame Aur Jeene Ki",
    "Hey Shona" ,"Hosh Waalo Ko Khabar" ,"Hum Pyar Karne Wale" ,"Hum Tum Dono Jab Mil Jayenge",
    "Humko Humise Chura Lo","Hum Tere Bin Kahin Reh Nahin Paate" ,"Hum Toh Tere Aashiq Hai Sadiyo",
    "Hua Hain Aaj Pehli Baar" ,"Intezaar Aitbaar Tumse Pyar" ,"I Love You","Ilu Ilu",
    "Iktaara","In Lamho Ke Daaman Mein" ,"Ishq Hua","Is Pyar Se Meri Taraf Na Dekho" ,
    "Jaadu Hai Nasha Hai" ,"Jaage Jaage" ,"Jab Koi Baat Bigad Jaaye" ,"Jab Se Tere Naina",
    "Janeman" ,"Jashn-E-Bahaara"}; 
    string time[26]={"2:30","2:07","3:52","3:18","1:37","2:53","3:30","2:17","3:57","3:17",
    "2:36","2:22","3:44","4:09","2:43","3:47","2:30","3:51","2:57","1:33","2:20","2:57",
    "3:09","3:20","3:56","2:28"};
    u_map< int,vector<pair<int,int> > > track;
    for(auto pr:album){
        int track_id = rand()%100000;
        int album_id = pr.first;
        int artist_id = pr.second;
        int random_track = rand()%94;
        int random_time = rand()%26;
        track[track_id].push_back({album_id,artist_id});
        cout << "(" << '"' << track_id << '"' << ","
        << '"' << album_id << '"' << ","
        << '"' << artist_id << '"' << ","
        << '"' << track_name[random_track] << '"' << ","
        << '"' << time[random_time] << '"'
        << "),\n";
    }

    cout << nl << nl;

    cout << "PLAYED TABLE \n";
    cout << "Played" << " " << "Track ID" << " " << "Album ID" << " " << "Artist ID" << nl;
    string played[26] = {"35:15","37:45","29:35","21:29","39:59","13:08","24:39","33:54",
    "8:26","28:31","16:22","9:28","29:52","10:55","39:15","38:35","7:14","8:36","24:42",
    "30:39","28:24","7:16","34:39","8:13","23:38","10:20"};
    for(auto &pr:track){
        int random = rand()%26;
        cout << "(" << '"' << played[random] << '"' << ","
        << '"' << pr.first << '"' << ",";
        for(auto &pr:pr.second){
            cout << '"' << pr.first << '"' << ","
            << '"' << pr.second << '"' << "),\n";
        }
    }
    return 0;
}