<template>
  <div class="detail-main">
      <div class="detail-show">
          <div class="project-item">
              <div class="project-item_blur">
                  <div class="item-bc" :style='{background:"url("+src+")"}'></div>
              </div>
              <div class="item-show">
                  <img :src="src" alt="">
                  <div class="item-show_right">
                      <p>{{projectData.data.project_basic_info.project_name}}</p>
                      <p>{{projectData.data.project_basic_info.city_name}}</p>
                      <p>{{(projectData.data.project_basic_info.price_range).slice(0,-1)}} <span>元</span></p>
                  </div>
              </div>
          </div>
          <div class="ticket-info">
              <div class="mini-cell">
                  <div class="wrapper">
                      <div v-for="feature in features" :key="feature.type" class="label">
                          <i class="iconfont icon-duigou"></i>
                          <span>{{feature.name}}</span>
                      </div>
                  </div>
                  <i class="iconfont icon-jiantou"></i>
              </div>
              <div class="ticket-popup"></div>
          </div>
          <div class="project-desc">
              <div class="cell">
                  <span>{{projectData.data.project_basic_info.show_time}}</span>
                  <i class="iconfont icon-jiantou"></i>
              </div>
          </div>
          <div class="project-city">
              <div class="city">
                  <span>{{projectData.data.venue.venue_name}}</span>
              </div>
          </div>
          <div class="project-card intro">
              <div class="card-hd">
                  <h4>介绍</h4>
              </div>
              <div class="card-bd">
                  <p>{{projectData.data.project_summary.description}}</p>
              </div>
              <div class="card-ft">
                  <div>更多图文介绍
                      <i class="iconfont icon-jiantou"></i>
                  </div>
              </div>
          </div>
          <div class="project-card buy-ticket">
              <div class="card-hd">
                  <h4>购票须知</h4>
              </div>
              <div class="card-bd">
                  <ul>
                      <li v-for="(ticketNote,i) in ticketNotes" :key="i">
                          <span>{{ticketNote.name}}</span>
                          <span>{{ticketNote.description}}</span>
                      </li>
                  </ul>
              </div>
              <div class="card-ft">
                  <div>更多购票须知
                      <i class="iconfont icon-jiantou"></i>
                  </div>
              </div>
          </div>
      </div>
      <div class="project-ft">
          <div class="footer-l">
              <img src="//gw.alicdn.com/tfs/TB1M_mQayqAXuNjy1XdXXaYcVXa-38-33.png">
              <p>想看</p>
          </div>
          <div class="footer-r">
              <h3>立即购买</h3>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  props:['id'],
  data() {
      return {
          projectData: {},
          src: '',
          features: [],
          ticketNotes: []
      }
  },
  methods: {
      getDetail (){
          this.$http.get('/mz/v1/proj/144367?t=1523858427048').then(res=>{
              console.log(res)
              this.projectData = res
              this.src=res.data.project_basic_info.project_pic
              this.features = res.data.features
              this.ticketNotes = res.data.ticket_notes
              console.log(this.ticketNotes)
          })
      }
  },
  created() {
      this.getDetail()
  }
}
</script>

<style lang="scss" scoped>
    .detail-main{
        display: flex;
        height: 100%;
        overflow: auto;
        .detail-show{
            width: 100%;
            .project-item{
                height: 1.9rem;
                border-bottom: 1px solid #e7e7e7;
                background: #fff;
                position: relative;
                .project-item_blur{
                    width: 100%;
                    height: 1.42rem;
                    overflow: hidden;
                    background-repeat: no-repeat;
                    background-size: 100% auto;
                    .item-bc{
                        height: 100%;
                        background-repeat: no-repeat;
                        background-size: 200% auto;
                        background-position: 0 50%;
                        -webkit-filter: saturate(1) brightness(1) blur(.16665rem) contrast(.8);
                        filter: saturate(1) brightness(1) blur(.16665rem) contrast(.8);
                        -webkit-transform: scale(1.1)!important;
                        transform: scale(1.1)!important;
                    }
                }
                .item-show{
                    position: absolute;
                    width: 3.55rem;
                    height: 1.42rem;
                    top: 30px;
                    right: 8px;
                    img{
                        height: 100%;
                        float: left;
                    }
                    .item-show_right{
                        float: left;
                        font-size: 15px;
                        color: #fff;
                        padding-left: 12px;
                        p:first-child{
                            margin-bottom: 9px;
                        }
                        p:last-child{
                            font-size: 20px;
                            color: #ff1268;
                            font-weight: 900;
                            position: absolute;
                            bottom: 0;
                            span{
                                font-size: 10px;
                                color: #999;
                            }
                        }
                    }
                }
            }
            .ticket-info{
                width: 100%;
                height: 45px;
                border-bottom: 1px solid #e7e7e7;
                background: #f8f8f8;
                .mini-cell{
                    height: 100%;
                    padding: 0 12px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .wrapper{
                        width: 2.96rem;
                        .label{
                            margin-right: 15px;
                            float: left;
                            font-size: 12px;
                            color: #999;
                            i{
                                font-size: 13px;
                                color: #ff1268;
                            }
                        }
                    }
                    i{
                        font-size: 10px;
                        color: #999;
                    }
                }
            }
            .project-desc{
                height: 43px;
                background: #fff;
                .cell{
                    height: 100%;
                    border-bottom: 1px solid #e7e7e7;
                    display: flex;
                    align-items: center;
                    padding: 0 12px;
                    justify-content: space-between;
                    span{
                        font-size: 13px;
                        color: #666;
                    }
                    i{
                        font-size: 10px;
                        color: #999;
                    }
                }
            }
            .project-city{
                height: 43px;
                background: #fff;
                .city{
                    height: 100%;
                    border-bottom: 1px solid #e7e7e7;
                    display: flex;
                    align-items: center;
                    padding: 0 12px;
                    justify-content: space-between;
                    span{
                        font-size: 13px;
                        color: #666;
                    }
                }
            }
            .project-card{
                border-top: 1px solid #e7e7e7;
                border-bottom: 1px solid #e7e7e7;
                background: #fff;
                .card-hd{
                    height: 50px;
                    padding: 0 12px;
                    font-size: 13px;
                    color: #222;
                    line-height: 50px;
                    h4{
                        font-size: 13px;
                        font-weight: 900;
                    }
                }
                .card-bd{
                    padding: 0 12px 15px;
                    font-size: 13px;
                    color: #666;
                    li{
                        display: flex;
                        padding-bottom: 9px;
                        span:first-child{
                            color: #999;
                            font-size: 13px;
                            margin-right: 16px;
                            min-width: 53px;
                        }
                        span:last-child{
                            color: #666;
                            font-size: 13px;
                        }
                    }
                }
                .card-ft{
                    height: 45px;
                    line-height: 45px;
                    text-align: center;
                    border-top: 1px solid #e7e7e7;
                    font-size: 12px;
                    color: #ff1268;
                    i{
                        font-size: 10px;
                    }
                }
            }
            .intro{
                margin: 10px 0;
            }
            .buy-ticket{
                margin-bottom: 10px;
            }
        }
        .project-ft{
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 48px;
            background: #fff;
            display: flex;
            .footer-l{
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                img{
                    width: 19px;
                    height:16px;
                }
                p{
                    font-size: 10px;
                    color: #666;
                }
            }
            .footer-r{
                width: 3.25rem;
                height: 100%;
                background-image: linear-gradient(90deg,#ff4aae,#ff1268);
                display: flex;
                align-items: center;
                justify-content: center;
                h3{
                    font-size: 15px;
                    color: #fff;
                }
            }
        }
    }
</style>
