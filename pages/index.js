import Head from 'next/head'
import Layout from '../Components/Layout';
import Management from '../Components/Management';





export default function Home() {
  return (
    <Layout>
      <div className="position-relative overflow-hidden p-3 p-md-5 text-center bg-primary">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal text-light">Health isn’t a goal, its a way of living</h1>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Drink your vitamins</h1>
        <p className="lead">Available in 3 options.</p>
      </div>
      
      <div className="container">
        <div className="card-deck mb-3 text-left">
          <div className="card">
            <img src="/img/product.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Original / Alkaline Water</h5>
              <p className="card-text">Finest, Clean, Smooth Alkaline Water. Boosting your immunity while hydrating you better than traditional waters.</p>
            </div>
          </div>
          <div className="card">
            <img src="/img/product.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Refresh / Sweet Flavoured</h5>
              <p className="card-text">Natural flavours, to refresh your entire system. An antioxidant filled with  several benefits including, weight loss, bone, brain and muscle health.</p>
            </div>
          </div>
          <div className="card">
            <img src="/img/product.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Renew / Citrus Flavoured</h5>
              <p className="card-text">Beautifying from the inside out. Loaded with Vitamin C, Citric acid, thiamin and various B Vitamins.  Improves skin quality, Increases energy and  improves diet.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="brand-text px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <p className="lead mx-auto">We created to flavoured options for those who want to consume their recommended water intake but don't like to drink water. </p>
      </div>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Water in a box?</h1>
        <p className="lead">Yes! No more plastic water bottles. Our package are made from 
                            100% recyclable and +68% renewable materials. </p>
      </div>

      <div className="section-why text-center py-3">
        <div className="image">
          <img className="img-fluid" src="/img/bigproduct.png" alt="..." />
        </div>
        <div className="row">
          <div className="col-lg-4">
            <img src="/icons/icon1.png" className="rounded" alt="..." />
            <p className="section-why-text py-2">Better for you.</p>
          </div>
          <div className="col-lg-4">
            <img src="/icons/icon2.png" className="rounded" alt="..." />
            <p className="section-why-text py-2">Eco-friendly packaging</p>
          </div>
          <div className="col-lg-4">
            <img src="/icons/icon3.png" className="rounded" alt="..." />
            <p className="section-why-text py-2">Clear Community</p>
          </div>
       </div>
        <h3 className="h1">Make it a Lifestyle</h3>
      </div>

      <div className="community text-left">
        <div className="community-item">
          <div className="row">
            <div className="col-lg-6">
              <img className="img-fluid" src="/img/community1.png" alt="..." />
            </div>
            <div className="col-lg-6">
              <p className="community-header">Clear Community</p>
              <p className="community-text">Clear Wellness is a Water for the new drinker’s market, it is a company built around sustainability and a better life. 
              Consumers can trust the source of our water and the impact they in turn will  have on their  body, world and community.
              The Clear Community allows you to finally develop healthy habits that becomes your lifestyle.</p>

              <p className="community-text">The name “Clear” reflects the transparency and purity of the beverage, alkaline artesian natural mineral drinking water-  the best water in the world that nature has provided.
              Clear is exactly as nature intended, the choice for people who want a drinking experience as close to nature in clearness, freshness, cleanliness and taste, with an unusual ability to quench any thirst.
              </p>
            </div>
          </div>
        </div>

        <div className="community-item">
          <div className="row">
            <div className="col-lg-6">
              <p className="community-text pt-5">The Clear Community extends outside of its’ clients. Our philanthropic efforts have focused on improving the lives of people with little to no access to drinkable water.</p>
              <p className="community-text">For more information kindly email <b>ClearBetterForEveryone@Gmail.com</b>
              </p>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid" src="/img/community2.png" alt="..." />
            </div>
          </div>
        </div>
      </div>

      <div className="section-why text-center py-5">
        <h3 className="h1 py-2">Why Clear</h3>
        <div className="container">
          <p className="community-text">
            Not all Waters are equal</p>
          <p className="community-text">  We are told our body is made up of 60% water. The water you consume is more important than the food you eat, the amount of the sleep you get and and the exercise you do, we agree it all matters, however,  water is fundamental to wellness.
            Drinking clear, fresh, naturally alkaline artesian water is amazing for you. So is lessening our environmental impact. Clear’s mission is to do both at the same time.
            We are the best choice.
          </p>
        </div>
      </div>

      <div className="founder">
        <div className="row">
          <div className="col-lg-5">
            <img className="img-fluid" src="/img/founder.png" alt="..." />
          </div>
          <div className="col-lg-7">
            <p className="community-header">Founders Message</p>
            <p className="community-text">
              I  was the most confident, sociable person, this all changed after I experienced severe health challenges.<br/>
              One day I took a trip to Los Angeles and a friend introduced me to alkaline water, I was skeptical at first, simply because iI had spent thousand of pounds, I had booked consultations with experts in the UK, Nigeria, India and USA trying to understand the root cause of my illness.  <br/>
              I began to drink alkaline water after deciding I literally had nothing to lose, and to my amazement Ii saw unbelievable results. <br />
              I came back to Nigerian and searched for a company who share my values in terms of a reliable source of alkaline water, eco- friendly packaging and tasted great! I didn't find one so decided to create one.<br />
              As my dad always said: “ If it Doesn't exist Create it”<br />

              <p className="community-text my-3"><b>Welcome To Clear</b></p>
            </p>
          </div>
        </div>
      </div>

      <div className="section-why text-center py-5">
        <h3 className="h1 py-2">Management Team and<br />Board of Advisors</h3>
        <div className="container">
          <Management />
        </div>
      </div>

      <style jsx>{`
          .bg-primary {
              background-color: #5da4e0!important;
          }

          .brand-text p{
            color: #5da4e0;
            max-width: 50rem;
            font-weight: 500;
            font-size: 20px;
          }

          .community{
            padding-left: 15%;
            padding-right: 15%;
            padding-top: 5%
          }

          .community-header{
            font-weight: 400;
            font-size: 36px;
            line-height: 48px;
            color: #5DA4E0;
            line-height: 48px;
          }

          .community-item{
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          .community-text{
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 26px;
            color: #656565;
            line-height: 26px;
          }

          .founder{
            padding-left: 18%;
            padding-right: 18%;
            padding-top: 5%;
            padding-bottom: 5%;
          }
          

          .product-big{
            max-width: 375px;
          }

          .section-why{
            background-color: #F0F9FF;
          }

          .section-why-text{
            font-weight: 400;
            font-size: 24px;
            line-height: 32px;
            text-align: center;
            color: #5DA4E0;
          }

          
          
      `}
      </style>
    </Layout>
  )
}
