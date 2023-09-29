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
    }
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