import AraHelmetHome from "../../assets/AraHelmet/Halaman Awal.jpg";
import AraDataBarang from "../../assets/AraHelmet/Data Barang.jpg";
import AraLapPenjualan from "../../assets/AraHelmet/Laporan Penjualan.jpg";
import AraTransaksi from "../../assets/AraHelmet/Transaksi.jpg";
import AraLogin from "../../assets/AraHelmet/Login.jpg";
import LBSDashboard from "../../assets/LaravelBlogSys/LBSDashboard.jpg";
import LBSLogin from "../../assets/LaravelBlogSys/LBSLogin.jpg";
import LBSHome from "../../assets/LaravelBlogSys/LBSHome.jpg";
import LBSProject from "../../assets/LaravelBlogSys/LBSProject.jpg";
import LBSCategory from "../../assets/LaravelBlogSys/LBSCategory.jpg";
import LBSProfile from "../../assets/LaravelBlogSys/LBSProfile.jpg";
import ARProdiHome from "../../assets/ARPHB/Home.jpg";
import ARProdi from "../../assets/ARPHB/ARProdi.jpg";
import ARProdiFasility from "../../assets/ARPHB/Fasility.jpg";
import ARProdiLoad from "../../assets/ARPHB/Loadscreen.jpg";
import KachujinHome from "../../assets/KachujinRun/Home.jpg";
import KachujinPlay from "../../assets/KachujinRun/Play.jpg";
import KachujinHowtoPlay from "../../assets/KachujinRun/HowToPlay.jpg";
import TicTacToeHome from "../../assets/TicTacToe/Home.png";
import TicTacToeTile from "../../assets/TicTacToe/Tile.png";
import TicTacToeSeri from "../../assets/TicTacToe/Seri.png";
import TicTacToeDefeat from "../../assets/TicTacToe/Defeat.png";
import PingPong2DHome from "../../assets/PingPong2D/Home.png";
import PingPong2DPlay from "../../assets/PingPong2D/Play.png";
import PingPong2DGameOver from "../../assets/PingPong2D/GameOver.png";
import PingPong2DHowToPlay from "../../assets/PingPong2D/HowToPlay.png";
import ReactPortfolioHome from "../../assets/ReactPortfolio/Home.png";
import ReactPortfolioAbout from "../../assets/ReactPortfolio/About.png";
import ReactPortfolioSkill from "../../assets/ReactPortfolio/Skill.png";
import ReactPortfolioPortfolio from "../../assets/ReactPortfolio/Portfolio.png";
import ReactPortfolioContact from "../../assets/ReactPortfolio/Contact.png";



export const projectsData = [
    {
        id: 1,
        image : LBSDashboard,
        title: 'Laravel Blog System',
        category: 'web',
        link : 'https://github.com/tiaraarista/laravel-blog-system.git',
        more1 : LBSDashboard,
        more2 : LBSLogin,
        more3 : LBSHome,
        more4 : LBSProject,
        more5 : LBSCategory,
        more6 : LBSProfile,
    },
    {
        id: 2,
        image : KachujinHome,
        title: 'Kachujin Run 3D',
        category: 'game',
        link : 'https://github.com/tiaraarista/kachujin-run.git',
        more1 : KachujinHome,
        more2 : KachujinPlay,
        more3 : KachujinHowtoPlay,
    },
    {
        id: 3,
        image : ARProdiHome,
        title: 'AR PHB',
        category: 'app',
        link : 'https://github.com/tiaraarista/AR-PHB.git',
        more1 : ARProdiLoad,
        more2 : ARProdiHome,
        more3 : ARProdi,
        more4 : ARProdiFasility,
    },
    {
        id: 4,
        image : AraHelmetHome,
        title: 'POS System',
        category: 'desktop',
        link : 'https://github.com/tiaraarista/POS-System.git',
        more1 : AraLogin,
        more2 : AraHelmetHome,
        more3 : AraDataBarang,
        more4 : AraTransaksi,
        more5 : AraLapPenjualan
    },
    {
        id: 5,
        image : TicTacToeHome,
        title: 'Tic Tac Toe',
        category: 'game',
        link : 'https://github.com/tiaraarista/TicTacToe-AI',
        more1 : TicTacToeHome,
        more2 : TicTacToeTile,
        more3 : TicTacToeSeri,
        more4 : TicTacToeDefeat
    },
    {
        id: 6,
        image : PingPong2DPlay,
        title: 'Ping Pong 2D',
        category: 'game',
        link : 'https://github.com/tiaraarista/Ping-Pong2D',
        more1 : PingPong2DHome,
        more2 : PingPong2DPlay,
        more3 : PingPong2DGameOver,
        more4 : PingPong2DHowToPlay
    },
    {
        id: 7,
        image : ReactPortfolioHome,
        title: 'React Portfolio',
        category: 'Web',
        link : 'https://github.com/tiaraarista/React-Portfolio',
        more1 : ReactPortfolioHome,
        more2 : ReactPortfolioAbout,
        more3 : ReactPortfolioSkill,
        more4 : ReactPortfolioPortfolio,
        more5 : ReactPortfolioContact
    },
];

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'web',
    },
    {
        name: 'game',
    },
    {
        name: 'app',
    },
    {
        name: 'desktop',
    }
]