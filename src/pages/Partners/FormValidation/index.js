import styles from './FormValidation.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import validator from 'validator';

const cx = classNames.bind(styles);
function FormValidation() {
    const initialValues = { fullname: '', email: '', company: '', title: '', content: '', phone: '' };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setFormErrors({ ...formErrors, [name]: '' });
    };
    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (validator.isEmpty(value)) {
            setFormErrors({ ...formErrors, [name]: 'Vui lòng nhập trường này' });
        }
    };
    const validate = (value) => {
        const errors = {};
        if (validator.isEmpty(value.fullname)) {
            errors.fullname = 'Vui lòng nhập trường này';
        }
        if (validator.isEmpty(value.email)) {
            errors.email = 'Vui lòng nhập trường này';
        } else if (!validator.isEmail(value.email)) {
            errors.email = 'Vui lòng nhập email chính xác';
        }
        if (validator.isEmpty(value.phone)) {
            errors.phone = 'Vui lòng nhập trường này';
        } else if (validator.isMobilePhone(value.phone)) {
            errors.phone = 'Vui lòng nhập trường này';
        }
        return errors;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
    return (
        <div className={cx('left-text')} role="form" lang="vi-VN">
            <form className={cx('contact-form')} method="post" action="" id="contact-form" onSubmit={handleSubmit}>
                <div className={cx('form-control', 'left-text')}>
                    <input
                        id="fullname"
                        name="fullname"
                        type="text"
                        placeholder="TÊN"
                        value={formValues.fullname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <span className={cx('form-message')}>{formErrors.fullname}</span>
                </div>
                <div className={cx('form-control')}>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="EMAIL"
                        value={formValues.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <span className={cx('form-message')}>{formErrors.email}</span>
                </div>
                <div className={cx('form-control')}>
                    <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="TÊN DOANH NGHIỆP"
                        value={formValues.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <span className={cx('form-message')}>{formErrors.company}</span>
                </div>
                <div className={cx('form-control')}>
                    <input
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="SỐ ĐIỆN THOẠI"
                        value={formValues.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <span className={cx('form-message')}>{formErrors.phone}</span>
                </div>
                <div className={cx('form-control', 'title')}>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="TIÊU ĐỀ"
                        value={formValues.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <span className={cx('form-message')}>{formErrors.title}</span>
                </div>
                <div className={cx('form-control', 'content')}>
                    <input
                        id="content"
                        name="content"
                        type="text"
                        placeholder="NỘI DUNG"
                        value={formValues.content}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <span className={cx('form-message')}>{formErrors.content}</span>
                </div>
                <button className={cx('submit-btn')}>GỬI</button>
            </form>
            {Object.keys(formErrors).length === 0 && isSubmit && (
                <div className={cx('sucess-messgage')}>
                    Cảm ơn bạn đã để lại thông tin. Chúng tôi sẽ liên hệ bạn trong thời gian sớm nhất
                </div>
            )}
        </div>
    );
}

export default FormValidation;
