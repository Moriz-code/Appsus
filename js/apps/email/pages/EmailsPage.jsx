import EmailService from '../services/EmailService.js'
import EmailList from '../cmps/EmailList.jsx'
import SideNav from '../cmps/SideNav.jsx';
import AddNewMail from '../cmps/AddNewMail.jsx'
import SearchEmail from '../cmps/SearchEmail.jsx'
import Filter from '../cmps/Filter.jsx'


export default class EmailsPage extends React.Component {
    state = {
        emails: [],
        isComposing: false,
        filterBy: 'inbox',
        searchBy: ''
    }

    componentDidMount() {
        this.loadEmails();
    }

    loadEmails = () => {
        console.log('load state ', this.state.filterBy)
        EmailService.getEmails(this.state.filterBy).then(emails => {
            this.setState({ emails })
        })
            &&
            EmailService.getEmails(this.state.searchBy).then(emails => {
                this.setState({ emails })
            })
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

    // toggleIsComposing = () => {
    //     this.setState(prevState => ({
    //         isComposing: !prevState.isComposing
    //     }), () => console.log(this.state.isComposing)
    //     )
    // }


    toggleIsComposing = () => {
        this.setState(prevState => ({
            isComposing: true
        }), () => console.log(this.state.isComposing)
        )
    }



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
            prevState.isComposing = false
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
                <div className="right-side flex column">
                    <div className="filtering-row flex flex-end">
                        <Filter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter}></Filter>
                        <SearchEmail searchBy={this.state.searchBy} onFilterSearch={this.onFilterSearch}></SearchEmail>

                    </div>
                    <EmailList emails={this.state.emails} onStarEmail={this.onStarEmail} onDeleteEmail={this.onDeleteEmail} onChangeBcgColor={this.onChangeBcgColor}></EmailList>
                </div>

            </div>) : (<div className=" body-container flex">
            
                <div className="left-side">
                    <SideNav emails={this.state.emails} onSetFilter={this.onSetFilter} toggleIsComposing={this.toggleIsComposing} ></SideNav>
                </div>
                <div className="right-side ">
                    <AddNewMail loadEmails={this.loadEmails}></AddNewMail>
                    </div>
                </div>)}
    
        </div>
    }
            }