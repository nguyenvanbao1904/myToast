const toast = document.querySelector(".toast")
const btns = document.querySelectorAll('.btn')

const createToast = ({status, icon, title, desc, time})=>{
    const toast_container = document.createElement('div');
    toast_container.classList.add("toast_container");
    toast_container.classList.add(`toast_${status}`)
    toast_container.style.animation = `slideIn var(--timeSlideIn) ease, fadeout calc(var(--timeSlideIn) + ${time+'ms'}) linear`;
    const htmls =
    `
        <div class="toast_status"></div>
        <div class="toast_body">
            ${icon}
            <div class="toast_content">
                <h4 class="toast_title">${title}</h4>
                <p class="toastDesc">${desc}</p>
            </div>
            <i class="fa-solid fa-xmark toast_close"></i>
    `
    toast_container.innerHTML = htmls;
    toast.appendChild(toast_container)

    const clearToast = setTimeout(()=>{
        toast.removeChild(toast_container);
    }, time)

    toast_container.addEventListener('click',(e)=>{
        if(e.target.className = "toast_close"){
            clearTimeout(clearToast);
            toast_container.remove();
        }
    })
}

btns.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        if(e.target.className.includes("success")){
            createToast({
                status: "success",
                icon: '<i class="fa-solid fa-circle-check toast_icon"></i>',
                title: "Thành Công!",
                desc: "Bạn đã đăng ký thành công tài khoản tại f8.",
                time: 3000
            })
        } else if(e.target.className.includes("error")){
            createToast({
                status: "error",
                icon: '<i class="fa-solid fa-circle-check toast_icon"></i>',
                title: "Thất bại!",
                desc: "Có lỗi xảy ra, vui lòng liên hệ quản trị viên.",
                time: 3000
            })
        }
    })
})
