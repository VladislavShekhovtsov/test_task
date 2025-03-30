import '../CardPlans.scss'
import CardButton from './cardButton';
import plansData from '../plans.json';


const CardPlans = ({ name, price, discount, bandwidth, price_per_unit, additional_features }) => {

  const { plans } = plansData;
  console.log(plans)

  const plansFirstCard = plans[0];
  const plansSecondCard = plans[1];
  const plansThirdCard = plans[2]


  return (
    <section className="card_wrapper">
      <h2 className="card_title">Select a Plan</h2>
      <div className="card_flex">

        {/* FIRST CARD START*/}

        <div className="plan_card">
          <div className="plan_card_name">
            <h3>{plansFirstCard.name}</h3>
            <div className="plan_card_name_label">-50% OFF</div>
          </div>
          <div className="plan_card_price_original">
            <p>
              <span>{`$${plansFirstCard.price}`}</span>
            </p>
            <p className='plan_card_price_discount'>
              {`$${(plansFirstCard.discount.value).toFixed(2)}`}
            </p>
          </div>
          <div className='plan_card_description'>
            <ul className='plan_card_description_items'>
              <li>
                {plansFirstCard.additional_features[0]}
              </li>
              <li>
                <span>{`$${plansFirstCard.price_per_unit}`}</span>
                {`$${(plansFirstCard.discount.value).toFixed(2)} / GB`}
              </li>
              <li>
                {plansFirstCard.additional_features[1]}
              </li>
              <li>
                {plansFirstCard.additional_features[2]}
              </li>

            </ul>
          </div>
          <CardButton name={"Sign Up Now"}/>
        </div>

        {/* FIRST CARD END*/}
        {/* SECOND CARD START*/}

        <div className="plan_card">
          <div className="plan_card_name">
            <h3>{plansSecondCard.name}</h3>
            <div className="plan_card_name_label">-50% OFF</div>
          </div>
          <div className="plan_card_price_original">
            <p>
              <span>{`$${plansSecondCard.price}`}</span>
            </p>
            <p className='plan_card_price_discount'>
              {`$${(plansSecondCard.discount.value).toFixed(2)}`}
            </p>
          </div>
          <div className='plan_card_description'>
            <ul className='plan_card_description_items'>
              <li>
                {plansSecondCard.additional_features[0]}
              </li>
              <li>
                <span>{`$${plansSecondCard.price_per_unit}`}</span>
                {`$${(plansSecondCard.price_per_unit / 2).toFixed(2)} / GB`}
              </li>
              {plansSecondCard.additional_features.filter((_, index) => index !== 0)  
                .map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}

            </ul>
          </div>
          <CardButton name={"Sign Up Now"} />
        </div>

        {/* SECOND CARD END*/}
        {/* THIRD CARD START*/}

        <div className="plan_card">
          <div className="plan_card_name">
            <h3>{plansThirdCard.name}</h3>
            <div className="plan_card_name_label">-50% OFF</div>
          </div>
          <div className="plan_card_price_original custom_price">
            <p>
              {plansThirdCard.price}
            </p>
          </div>
          <div className='plan_card_description'>
            <p className='plan_card_description_items custom_description'>{plansThirdCard.additional_features}</p>
          </div>
          <CardButton name={"Contact US"}/>
        </div>

        {/* THIRD CARD END*/}



      </div>
    </section>
  );
};


export default CardPlans;