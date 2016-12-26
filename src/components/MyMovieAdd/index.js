import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import moment from 'moment'

import TextInput from '../TextInput'
import { createMovieValidator } from '../../utils/validator'
import { createMovie } from '../../actions/movie'


class MyMovieAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title : '',
            original_title : '',
            aka : '',
            subtype : '',
            directors : '',
            casts : '',
            writers : '',
            website : '',
            pubdate : undefined,
            year : '',
            language : '',
            genres : '',
            summary : '',
            isLoading : false,
            errors : {},
            isLoaded : false
        }

        this.onChange = this.onChange.bind(this)
        this.onCreateClick = this.onCreateClick.bind(this)
        this.onUpdateClick = this.onUpdateClick.bind(this)

    }

    componentDidMount() {

        if (this.props.edite) {
            const movieId = this.props.movieId
            this.props.getMovie(movieId)
                .then((res) => res.json())
                .then((result) => {
                    if (result.success) {
                        let movie = result.movie 

                        this.setState({
                            title : movie.title,
                            original_title : movie.original_title,
                            aka : movie.aka,
                            subtype : movie.subtype,
                            directors : movie.directors,
                            casts : movie.casts,
                            writers : movie.writers,
                            website : movie.website,
                            pubdate : movie.pubdate ? moment(movie.pubdate).format('YYYY-MM-DD') : undefined,
                            year : movie.year,
                            language : movie.language,
                            genres : movie.genres,
                            summary : movie.summary,                            
                        })

                    } else {
                        console.log(result.error)
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        } 
    }


    isValid() {
        const { errors, isValid } = createMovieValidator(this.state)

        if (!isValid) {
            this.setState({
                errors
            })
        }

        return isValid
    }

    onUpdateClick() {

        const movieId = this.props.movieId

        if (this.isValid()) {
            this.setState({
                errors : {},
                isLoading : true
            })
            this.props.updateMovie(movieId, this.state)
                .then((res) => res.json())
                .then((result) => {
                    if (result.success) {
                        this.setState({
                            isLoading : false,
                            isLoaded : true
                        })
                    } else {
                        console.log(result.error)
                        this.setState({
                            isLoading : false
                        })
                    }
                })
                .catch((err) => {
                    console.log(err)
                    this.setState({
                        isLoading : false
                    })
                })      
        }
    }


    onCreateClick() {

        const { auth } = this.props
        const userId = auth.user.id 

        console.log(this.isValid())

        if (this.isValid()) {
            this.setState({
                errors : {},
                isLoading : true
            })
            this.props.createMovie(userId, this.state)
                .then((res) => res.json())
                .then((result) => {
                    if (result.success) {
                        console.log(result.movie)
                        this.setState({
                            isLoading : false,
                            isLoaded : true
                        })
                    } else {
                        console.log(result.error)
                        this.setState({
                            isLoading : false
                        })
                    }
                })
                .catch((err) => {
                    console.log(err)
                    this.setState({
                        isLoading : false
                    })
                })
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    render() {

        const { title, original_title, aka, subtype, directors, casts, writers, website, pubdate, year, language, genres, summary, errors } = this.state

        return (
            <div>
            {
                this.state.isLoaded ? <Redirect to="/mymovie" /> : 
                (<div className="my-movie-add">
                    <TextInput 
                        label="电影名称"
                        type="text"
                        name="title"
                        value={title}
                        error={errors.title}
                        placeholder="请输入电影名称"
                        onChange={this.onChange}
                    />
                    <TextInput 
                        label="电影原始名称"
                        type="text"
                        name="original_title"
                        value={original_title}
                        error={errors.original_title}
                        placeholder="请输入电影原始名称"
                        onChange={this.onChange}
                    />
                    <TextInput 
                        label="电影别名"
                        type="text"
                        name="aka"
                        value={aka}
                        error={errors.aka}
                        placeholder="请输入电影别名"
                        onChange={this.onChange}
                    />
                    <TextInput 
                        label="电影分类"
                        type="text"
                        name="subtype"
                        value={subtype}
                        error={errors.subtype}
                        placeholder="请输入电影分类"
                        onChange={this.onChange}
                    />
                    <TextInput 
                        label="电影导演"
                        type="text"
                        name="directors"
                        value={directors}
                        error={errors.directors}
                        placeholder="请输入电影导演"
                        onChange={this.onChange}
                    />
                    <TextInput 
                        label="电影主演"
                        type="text"
                        name="casts"
                        value={casts}
                        error={errors.casts}
                        placeholder="请输入电影主演"
                        onChange={this.onChange}
                    />
                    <TextInput 
                        label="电影编剧"
                        type="text"
                        name="writers"
                        value={writers}
                        error={errors.writers}
                        placeholder="请输入电影编剧"
                        onChange={this.onChange}
                    />
                    <TextInput 
                        label="电影官网"
                        type="text"
                        name="website"
                        value={website}
                        error={errors.website}
                        placeholder="请输入电影官网"
                        onChange={this.onChange}
                    />
                    <TextInput 
                        label="电影上映日期"
                        type="date"
                        name="pubdate"
                        value={pubdate}
                        error={errors.pubdate}
                        placeholder="请输入电影上映日期"
                        onChange={this.onChange}
                    />
                    <TextInput 
                        label="电影上映年代"
                        type="text"
                        name="year"
                        value={year}
                        error={errors.year}
                        placeholder="请输入电影上映年代"
                        onChange={this.onChange}
                    />
                    <TextInput 
                        label="电影语言"
                        type="text"
                        name="language"
                        value={language}
                        error={errors.language}
                        placeholder="请输入电影语言"
                        onChange={this.onChange}
                    />
                    <TextInput 
                        label="电影类型"
                        type="text"
                        name="genres"
                        value={genres}
                        error={errors.genres}
                        placeholder="请输入电影类型"
                        onChange={this.onChange}
                    />
                    <TextInput 
                        label="电影简介"
                        type="text"
                        name="summary"
                        value={summary}
                        error={errors.summary}
                        placeholder="请输入电影简介"
                        onChange={this.onChange}
                    />
                    {
                        this.props.edite ? 
                            <div className="form-group">
                                <button type="button" className="submit-btn" onClick={this.onUpdateClick}>更新</button>
                            </div>
                        :
                            <div className="form-group">
                                <button type="button" className="submit-btn" onClick={this.onCreateClick}>创建</button>
                            </div>
                        
                    }
                </div>)
            }

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth : state.auth
    }
}


export default connect(mapStateToProps, { createMovie })(MyMovieAdd);

