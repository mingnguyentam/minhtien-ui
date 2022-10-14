import { newThumnail } from '../../../assets/images';
import Post1 from '../Archive/Post1';
import Post2 from '../Archive/Post2';
import Post3 from '../Archive/Post3';
import Post4 from '../Archive/Post4';
import ConvertVie from '../../../components/ConvertVie';
const publicArchive = [
    {
        title: 'COFFILIA ĐƯỢC VINH DANH TOP 1 HÀNG VIỆT NAM ĐƯỢC NGƯỜI TIÊU DÙNG YÊU THÍCH',
        path: function () {
            return `/tin-tuc/${ConvertVie(this.title.toLowerCase()).replace(/\s/g, '-')}`;
        },
        thumnail: newThumnail[0].path,
        time: '9 Tháng 12, 2021',
        component: Post1,
    },
    {
        title: 'CHIẾN LƯỢC MỚI CHO CÀ PHÊ VIỆT TIẾN VÀO THỊ TRƯỜNG TRUNG ĐÔNG',
        path: function () {
            return `/tin-tuc/${ConvertVie(this.title.toLowerCase()).replace(/\s/g, '-')}`;
        },
        thumnail: newThumnail[1].path,
        time: '9 Tháng 12, 2021',
        component: Post2,
    },
    {
        title: 'MÔ HÌNH KINH TẾ TUẦN HOÀN CỦA MINH TIẾN LÊN SÓNG CHƯƠNG TRÌNH CNN',
        path: function () {
            return `/tin-tuc/${ConvertVie(this.title.toLowerCase()).replace(/\s/g, '-')}`;
        },
        thumnail: newThumnail[2].path,
        time: '9 Tháng 12, 2021',
        component: Post3,
    },
    {
        title: 'KUWAIT VÀ NHỮNG ĐIỀU CÓ THỂ BẠN CHƯA BIẾT',
        path: function () {
            return `/tin-tuc/${ConvertVie(this.title.toLowerCase()).replace(/\s/g, '-')}`;
        },
        thumnail: newThumnail[3].path,
        time: '12 Tháng 11, 2021',
        component: Post4,
    },
];
export default publicArchive;
