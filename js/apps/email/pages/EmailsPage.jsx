import EmailService from '../services/EmailService.js'
import EmailList from '../cmps/EmailList.jsx'
import SideNav from '../cmps/SideNav.jsx';
import AddNewMail from '../cmps/AddNewMail.jsx'
import SearchEmail from '../cmps/SearchEmail.jsx'
import Filter from '../cmps/Filter.jsx'
import EmailDetails from '../cmps/EmailDetails.jsx';


export default class EmailsPage extends React.Component {
    state = {
        emails: [],
        isComposing: false,
        filterBy: 'inbox',
        searchBy: '',
        selectedMail: null
    }

    componentDidMount() {
        this.loadEmails();
    }



    loadEmails = () => {
        console.log('load state ', this.state.filterBy)
        // if(this.state.searchBy===''){
        EmailService.getEmails(this.state.filterBy, this.state.searchBy).then(emails => {
            this.setState({ emails })
        })
        // }


        // else    EmailService.getEmails(this.state.searchBy).then(emails => {
        //         this.setState({ emails })
        //     })

    }


    onChangeBcgColor = (emailId) => {
        EmailService.ChangeBcgColor(emailId)
        // console.log('grandpa', emailId)
        this.loadEmails();
    }


    onDeleteEmail = (emailId) => {
        // console.log('grandpa', emailId)
        EmailService.deleteEmail(emailId).then(() => {
            this.props.history.push('/emails')
            this.loadEmails()

        });
    }


    onStarEmail = (emailId) => {
        EmailService.starEmail(emailId)
        console.log('grandpa', emailId)
        this.loadEmails();

    }

    onSetSelectedEmail = (emailId) => {
        console.log('grandpa')
        EmailService.getEmailById(emailId).then((email) => {
            EmailService.ChangeBcgColor(emailId),
            this.setState({ selectedMail: email })
            })
       
    }

    onGoBack = () => {
        this.setState({ selectedMail: null });
        this.loadEmails();
    }


    toggleIsComposing = () => {
        this.setState(prevState => ({
            isComposing: !prevState.isComposing
        }), () => console.log(this.state.isComposing)
        )
    }


    // toggleIsComposing = () => {
    //     this.setState(prevState => ({
    //         isComposing: true
    //     }), () => console.log(this.state.isComposing)
    //     )
    // }



    // onSetFilter = (filterName) => {
    //     // debugger;
    //     console.log(filterName);
    //     console.log(this.state);
    //     this.setState({filterBy:filterName},console.log(this.state))

    //         // this.loadEmails)
    // }


    onSetFilter = (filterName) => {
        console.log('emailpage', filterName);
        // console.log(this.state);
        this.setState(prevState => {
            prevState.filterBy = filterName;
            console.log('this.state omg', this.state);
            prevState.isComposing = false;
            prevState.selectedMail = null
            //  console.log('this.state',this.state);
        }, () => this.loadEmails())
        // ,()=>console.log(this.state), () => this.loadEmails(),()=>console.log(this.state)
    }


    onFilterSearch = (filterBy) => {
        console.log('coraljjj', filterBy)
        this.setState(prevState =>
            ({ searchBy: prevState.searchBy, ...filterBy }), () => this.loadEmails());
    }





    render() {
        return <div className="main-email-app">

            {!this.state.isComposing ? (<div className=" body-container flex">

                <div className="left-side">
                    <SideNav emails={this.state.emails} onSetFilter={this.onSetFilter} toggleIsComposing={this.toggleIsComposing} ></SideNav>
                </div>


                <div className="right-side flex column align-items">


                    <div className="filtering-row flex flex-end">
                        <Filter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter}></Filter>
                        <SearchEmail searchBy={this.state.searchBy} onFilterSearch={this.onFilterSearch}></SearchEmail>
                    </div>

{/* 
                    {this.state.emails.length === 0 ?
                        <img class="no-results-pic" src="assets/imgs/Email-imgs/error.PNG" />
                        : <EmailList emails={this.state.emails} onStarEmail={this.onStarEmail} onDeleteEmail={this.onDeleteEmail} onChangeBcgColor={this.onChangeBcgColor}></EmailList>
                           }
                      
                    </div> */}

                {this.state.emails.length === 0 ?
                    <img class="no-results-pic" src="assets/imgs/Email-imgs/error.PNG" />
                    : <div>{!this.state.selectedMail ? <EmailList emails={this.state.emails} onStarEmail={this.onStarEmail} onDeleteEmail={this.onDeleteEmail} onChangeBcgColor={this.onChangeBcgColor}onSetSelectedEmail={this.onSetSelectedEmail}></EmailList>
                        : <EmailDetails email={this.state.selectedMail} onGoBack={this.onGoBack} ></EmailDetails>}
                    </div>
                }</div>




            </div>) : (<div className=" body-container flex">

            <div className="left-side">
                <SideNav emails={this.state.emails} onSetFilter={this.onSetFilter} toggleIsComposing={this.toggleIsComposing} ></SideNav>
            </div>
            <div className="right-side ">
                <AddNewMail toggleIsComposing={this.toggleIsComposing} loadEmails={this.loadEmails}></AddNewMail>
            </div>
        </div>)
    }

        </div>
    }
}