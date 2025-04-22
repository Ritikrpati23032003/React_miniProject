const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST ABD WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESRVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="herobtn">
            <button>Shop Now</button>
            <button className="secondbtn">Category</button>
        </div>
        <div className="shopping">
            <p>Also Avilable on</p>
            <div className="brand-icons">
                <a href="https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5km84u9k2k_e&adgrpid=155259813113&hvpone=&hvptwo=&hvadid=674842289479&hvpos=&hvnetw=g&hvrand=382
                1816108771076771&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007799&hvtargid=kwd-304880464215&hydadcr=14450_2316420&gad_source=1"><img src="images/amazon.png" alt="amazon" />
                </a>
                <a href="https://www.flipkart.com/q/shoes"><img src="images/flipkart.png" alt="flipkart" /></a>
            </div>
        </div>
      </div>
      <div className="hero-image">
       <img src="images/hero-image.png" alt="shoes" />
      </div>
    </main>
  );
};

export default Hero;
