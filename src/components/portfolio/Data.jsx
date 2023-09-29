import AraHelmet from "../../assets/AraHelmet/Halaman Awal.jpg";
import LaravelBlogSys from "../../assets/LaravelBlogSys/Laravel Blog System.jpg";
import ARProdi from "../../assets/ARPHB/Home.jpg";
import Kachujin from "../../assets/KachujinRun/Home.jpg";




export const projectsData = [
    {
        id: 1,
        image : LaravelBlogSys,
        title: 'Laravel Blog System',
        category: 'web',
        link : 'https://github.com/tiaraarista/laravel-blog-system.git',
    },
    {
        id: 2,
        image : Kachujin,
        title: 'Kachujin Run 3D',
        category: 'game',
        link : 'https://github.com/tiaraarista/kachujin-run.git',
    },
    {
        id: 3,
        image : ARProdi,
        title: 'AR PHB',
        category: 'app',
        link : 'https://github.com/tiaraarista/AR-PHB.git',
    },
    {
        id: 4,
        image : AraHelmet,
        title: 'POS System',
        category: 'desktop',
        link : 'https://github.com/tiaraarista/POS-System.git',
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