import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Partners from '../pages/Partners';
import Manufacturing from '../pages/Manufacturing';
import Products from '../pages/Products';
import Sustainability from '../pages/Sustainability';


const publicRoutes = [
    { path: '/', component: Home, title: 'TRANG CHỦ' },
    {
        path: '/gioi-thieu',
        component: About,
        title: 'Giới Thiệu',
        subContent: [
            {subTitle: 'Câu Chuyện', subPath: '#cauchuyen'},
            {subTitle: 'Hành Trình', subPath: '#hanhtrinh'},
            { subTitle: 'Cột Mốc', subPath: '#cotmoc' },
            { subTitle: 'Tầm Nhìn và Giá Trị Cốt Lõi', subPath: '#tamnhin' },
            { subTitle: 'Chứng Nhận', subPath: '#chungnhan' },
        ],
    },
    {
        path: '/san-pham',
        component: Products,
        title: 'Sản phẩm',
        subContent: [
            { subTitle: 'Coffilia Rang Xay', subPath: '#coffilia-rang-xay' },
            { subTitle: 'Coffilia Hòa Tan', subPath: '#coffilia-hoa-tan' },
        ],
    },
    {
        path: '/ben-vung',
        component: Sustainability,
        title: 'Bền Vững',
        subContent: [
            { subTitle: 'Nguyên Bản', subPath: '#nguyen-ban' },
            { subTitle: 'Kinh Tế', subPath: '#kinh-te' },
            { subTitle: 'Xã Hội', subPath: '#xa-hoi' },
            { subTitle: 'Môi Trường', subPath: '#moi-truong' },
            { subTitle: 'Hoạt Động', subPath: '#hoat-dong' },
        ],
    },
    {
        path: '/san-xuat',
        component: Manufacturing,
        title: 'Sản Xuất',
        subContent: [
            { subTitle: 'Nhà Xưởng', subPath: '#nha-xuong' },
            { subTitle: 'Vùng Trồng', subPath: '#vung-trong' },
            { subTitle: 'Quy Trình Sản Xuất', subPath: '#quy-trinh-san-xuat' },
        ],
    },
    {
        path: '/doi-tac',
        component: Partners,
        title: 'Đối Tác',
        subContent: [
            { subTitle: 'Nông Hộ', subPath: '#nong-ho' },
            { subTitle: 'Xuất Khẩu', subPath: '#xuat-khau' },
            { subTitle: 'Phân Phối', subPath: '#phan-phoi' },
            { subTitle: 'Đăng ký', subPath: '#dang-ky' },
        ],
    },
    { path: '/tin-tuc', component: News, title: 'Tin Tức',
    subContent: [
        { subTitle: 'Bản tin', subPath: '#ban-tin' },
        { subTitle: 'Môi Trường', subPath: '#moi-truong' },
        { subTitle: 'Nhân Quyền', subPath: '#nhan-quyen' },
        { subTitle: 'Từ Thiện', subPath: '#tu-thien' },
    ],},
];

export default publicRoutes;
