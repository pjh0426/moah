import React from "react";
import './QuickLinks.css';
import { Calendar2Check, CashStack, EnvelopeFill, EnvelopeOpenFill, Mailbox, Mailbox2 } from 'react-bootstrap-icons';


const QuickLink = ({ data }) => <div className="quickLinkDiv">
           <div className="quickLinkDivHeader">
               {data.icon}
               <p>{data.title}</p>
             </div>
             <div className="quickLinkDivBody">
               <p>{data.body}</p>
             </div>
         </div>;

const QuickLinks = () => {
    const data = [
      { 
        id: 1,
        title: 'FINANCIALS', 
        body: 'Our fundraising model reflects our vision for sustainable development and empowering childrens and communities to make a difference.' ,
        icon: <CashStack size={30} />
      },{ 
        id: 2,
        title: 'EVENT', 
        body: 'Moah is a charity organization dedicated to supporting socio-economically disadvantaged children and youth by implementing annual projects and charity events.' ,
        icon: <Calendar2Check size={30} />
      },{ 
        id: 3,
        title: 'Contact us', 
        body: 'Email: moahtoronto0610@gmail.com' ,
        icon: <EnvelopeFill size={30} />
      }
    ];
    const renderData = data.map((d) => <QuickLink key={d.id} data = {{title: d.title, body: d.body, icon:d.icon}}/>);

    return (
          <div className="quickLinkContainer">
            {renderData}
           </div>

    );
    // return (
    //   <div className="quickLinkContainer">
    //     <QuickLink data={{ 
    //                       title: 'FINANCIALS', 
    //                       body: 'Our fundraising model reflects our vision for sustainable development and empowering childrens and communities to make a difference.' ,
    //                       icon: <CashStack size={30} />
    //                     }} />
    //     <QuickLink data={{ 
    //                       title: 'EVENT', 
    //                       body: 'Moah is a charity organization dedicated to supporting socio-economically disadvantaged children and youth by implementing annual projects and charity events.' ,
    //                       icon: <Calendar2Check size={30} />
    //                     }} />
    //     <QuickLink data={{ 
    //                       title: 'Contact us', 
    //                       body: 'Email: moahtoronto0610@gmail.com' ,
    //                       icon: <EnvelopeFill size={30} />
    //                     }} />
    //   </div>
    // );
  }
 

// class QuickLink extends Component {
//   render() {
//     return 
//         <div className="quickLinkDiv">
//           <div className="quickLinkDivHeader">
//               <Calendar2Check size={30} />
//               <p>{this.props.data.title}</p>
//             </div>
//             <div className="quickLinkDivBody">
//               <p>{this.props.data.body}</p>
//             </div>
//         </div>;
//   }
// }


export default QuickLinks;