import React from 'react'


const Contents = () => {
    return(
        <section id='contents' className='container'>
            <div className='mainimg'>
                <img src="./img/R5-mainimg.png" alt="" />
            </div>
            <div>
                {/* content-1 */}
                <div className='con-title text-center'>
                    <div className='mb-4'>
                        <h2>올인원 타워</h2>
                        <p>손 대지 않아도 알아서 척척<br></br>먼지통 속 먼지 처리와 충전 모두 자동으로</p>
                    </div>
                    <div>
                        <img src="./img/contentsimg/allinone.gif" alt="올인원타워" />
                    </div>
                    <div className='con-comp d-flex justify-content-center align-items-center'>
                        <div>
                            <img src="./img/contentsimg/dust-uvc.gif" alt="먼지필터" />
                        </div>
                        <div className='con-comp-text'>
                            <h3>청소한 먼지까지 깔끔하게</h3>
                            <p>고성능 미세먼지 차단 시스템과<br></br>UVC LED로<br></br>먼지 봉투 내부의 먼지까지<br></br>위생적으로 관리합니다.</p>
                        </div>
                    </div>
                </div>
                {/* content-2 */}
                <div className='con-title text-center'>
                    <div className='mb-4'>
                        <h2>라이다 센서</h2>
                        <p>자율주행 자동차에 사용되는<br></br>라이다 센서 탑재로<br></br>더욱 정밀하고 꼼꼼한 청소</p>
                    </div>
                    <div>
                        <img src="./img/contentsimg/lidar-sensor.png" alt="라이다센서" />
                    </div>
                    <div className='con-comp row justify-content-center align-items-center'>
                        <div className='col-5 cliff-sensor'>
                            <img src="./img/contentsimg/cliff-sensor.gif" alt="낭떠러지센서" />
                        </div>
                        <div className='con-comp-text-2 col-5'>
                            <h3>망설임 없는 주행</h3>
                            <p>범퍼 센서, 라이다 눌림 센서,<br></br>낭떠러지 센서가 경로의 장애물을 인식하고<br></br>사이드 브러시가 구석구석 남김없이 청소하여<br></br>빠르고 완벽한 청소를 수행합니다.</p>
                        </div>
                        <div className='col-5 mt-5'>
                            <img src="./img/contentsimg/bumper-sensor1.png" alt="범퍼센서1" />
                        </div>
                        <div className='col-5 mt-5'>
                            <img src="./img/contentsimg/bumper-sensor2.png" alt="범퍼센서2" />
                        </div>
                    </div>
                </div>
                {/* content-3 */}
                <div className='con-title text-center'>
                    <div className='mb-4'>
                        <h2>물걸레, 먼지 동시 청소</h2>
                        <p>시간과 청결 모두 잡은 기술력<br></br>물걸레와 먼지 청소를 한번에</p>
                    </div>
                    <div>
                        <img src="./img/contentsimg/water-clean.png" alt="물걸레" />
                    </div>
                    <div className='con-comp row justify-content-center align-items-center'>
                        <div className='col-5 cliff-sensor'>
                            <img src="./img/contentsimg/4step-power.gif" alt="4단계흡입" />
                        </div>
                        <div className='con-comp-text-2 col-5'>
                            <h3>더욱 더 섬세하게</h3>
                            <p>4단계 흡입 세기 조절로<br></br>어떠한 상황에서도 섬세한 청소가 가능하며<br></br>스마트 터보 기능으로 환경에 따라<br></br>흡입 세기를 조절하여<br></br>청소가 어려운 표면 위에서도<br></br>손쉬운 청소가 가능합니다.</p>
                        </div>
                        <div className='con-comp-text-2 col-5'>
                            <h3>망설임 없는 주행</h3>
                            <p>범퍼 센서, 라이다 눌림 센서,<br></br>낭떠러지 센서가 경로의 장애물을 인식하고<br></br>사이드 브러시가 구석구석 남김없이 청소하여<br></br>빠르고 완벽한 청소를 수행합니다.</p>
                        </div>
                        <div className='col-5 mt-5'>
                            <img src="./img/contentsimg/auto-water.png" alt="자동물충전" />
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Contents