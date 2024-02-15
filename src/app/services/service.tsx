import {Square} from "@/app/main/main";

export default function Service({service}: { service: Square }) {
    const color = useColor(service.icon)
    return (
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mb-4 mt-lg-0">
            <div className={`icon-box iconbox-${color}`}>
                <div className="icon">
                    <svg width="100" height="100" viewBox="0 0 600 600"
                         xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" strokeWidth="0" fill="#f5f5f5"
                              d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"></path>
                    </svg>
                    <i className={service.icon}></i>
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
            </div>
        </div>
    );



    function useColor(icon: string) {
        if (icon.includes('tiktok') || icon.includes('google')) {
            return 'orange';
        } else if (icon.includes('facebook')) {
            return 'blue';
        } else {
            return 'pink';
        }
    }
}