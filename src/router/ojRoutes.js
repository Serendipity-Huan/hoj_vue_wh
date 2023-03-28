import Home from '@/views/oj/Home.vue'
import SetNewPassword from "@/views/oj/user/SetNewPassword.vue"
import UserHome from "@/views/oj/user/UserHome.vue"
import Setting from "@/views/oj/user/Setting.vue"
import ProblemLIst from "@/views/oj/problem/ProblemList.vue"
import Logout from "@/views/oj/user/Logout.vue"
import SubmissionList from "@/views/oj/status/SubmissionList.vue"
import SubmissionDetails from "@/views/oj/status/SubmissionDetails.vue"
import ContestList from "@/views/oj/contest/ContestList.vue"
import ExamList from "@/views/oj/exam/ExamList.vue"
import PaperList from "@/views/oj/exam/PaperList.vue"
import Problem from "@/views/oj/problem/Problem.vue"
import ACMRank from "@/views/oj/rank/ACMRank.vue"
import OIRank from "@/views/oj/rank/OIRank.vue"
import ContestDetails from "@/views/oj/contest/ContestDetails.vue"
import ACMScoreBoard from "@/views/oj/contest/outside/ACMScoreBoard.vue"
import OIScoreBoard from "@/views/oj/contest/outside/OIScoreBoard.vue"
import ContestProblemList from "@/views/oj/contest/children/ContestProblemList.vue"
import ContestRank from "@/views/oj/contest/children/ContestRank.vue"
import ACMInfoAdmin from "@/views/oj/contest/children/ACMInfoAdmin.vue"
import PaperDetails from "@/views/oj/exam/PaperDetails.vue"
import paperACMScoreBoard from "@/views/oj/exam/outside/ACMScoreBoard.vue"
import paperOIScoreBoard from "@/views/oj/exam/outside/OIScoreBoard.vue"
import PaperProblemList from "@/views/oj/exam/children/PaperProblemList.vue"
import PaperRank from "@/views/oj/exam/children/PaperRank.vue"
import paperACMInfoAdmin from "@/views/oj/exam/children/ACMInfoAdmin.vue"
import Announcements from "@/components/oj/common/Announcements.vue"
import ContestComment from "@/views/oj/contest/children/ContestComment.vue"
import ContestPrint from "@/views/oj/contest/children/ContestPrint.vue"
import ContestAdminPrint from "@/views/oj/contest/children/ContestAdminPrint.vue"
import ContestRejudgeAdmin from "@/views/oj/contest/children/ContestRejudgeAdmin.vue"
import PaperComment from "@/views/oj/exam/children/PaperComment.vue"
import PaperPrint from "@/views/oj/exam/children/PaperPrint.vue"
import PaperAdminPrint from "@/views/oj/exam/children/PaperAdminPrint.vue"
import PaperRejudgeAdmin from "@/views/oj/exam/children/PaperRejudgeAdmin.vue"
import DiscussionList from "@/views/oj/discussion/discussionList.vue"
import Discussion from "@/views/oj/discussion/discussion.vue"
import CodeSummarization from "@/views/oj/codeAI/CodeSummarization.vue"
import Introduction from "@/views/oj/about/Introduction.vue"
import Developer from "@/views/oj/about/Developer.vue"
import Message from "@/views/oj/message/message.vue"
import UserMsg from "@/views/oj/message/UserMsg.vue"
import SysMsg from "@/views/oj/message/SysMsg.vue"
import TrainingList from "@/views/oj/training/TrainingList.vue"
import TrainingDetails from "@/views/oj/training/TrainingDetails.vue"
import TrainingProblemList from "@/views/oj/training/TrainingProblemList.vue"
import TrainingRank from "@/views/oj/training/TrainingRank.vue"
import GroupList from '@/views/oj/group/GroupList.vue'
import GroupDetails from '@/views/oj/group/GroupDetails.vue'
import GroupAnnouncementList from '@/views/oj/group/children/GroupAnnouncementList.vue'
import GroupProblemList from '@/views/oj/group/children/GroupProblemList.vue'
import GroupTrainingList from '@/views/oj/group/children/GroupTrainingList.vue'
import GroupContestList from '@/views/oj/group/children/GroupContestList.vue'
import GroupDiscussionList from '@/views/oj/group/children/GroupDiscussionList.vue'
import GroupMemberList from '@/views/oj/group/children/GroupMemberList.vue'
import GroupSetting from '@/views/oj/group/children/GroupSetting.vue'
import NotFound from "@/views/404.vue"
import ExternalSearch from "@/views/oj/externalSearch/externalSearch.vue"

const ojRoutes = [
  {
    path: '/',
    redirect: '/home',
    component: Home,
    meta: { title: 'Home' }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { title: 'Home' }
  },
  {
    path: '/problem',
    name: 'ProblemList',
    component: ProblemLIst,
    meta: { title: 'Problem' }
  },
  {
    path: '/problem/:problemID',
    name: 'ProblemDetails',
    component: Problem,
    meta: { title: 'Problem Details' }
  },
  {
    path: '/training',
    name: 'TrainingList',
    component: TrainingList,
    meta: { title: 'Training' }
  },
  {
    name: 'TrainingDetails',
    path: '/training/:trainingID/',
    component:TrainingDetails,
    meta: {title: 'Training Details'},
    children: [
      {
        name: 'TrainingProblemList',
        path: 'problems',
        component: TrainingProblemList,
        meta: { title: 'Training Problem' }
      },
      {
        name: 'TrainingProblemDetails',
        path: 'problem/:problemID/',
        component: Problem,
        meta: { title: 'Training Problem Details' }
      },
      {
        name: 'TrainingRank',
        path: 'rank',
        component: TrainingRank,
        meta: { title: 'Training Rank' }
      }
    ]
  },
  {
    path: '/contest',
    name: 'ContestList',
    component: ContestList,
    meta: { title: 'Contest' }
  },
  {
    path: '/exam',
    name: 'ExamList',
    component: ExamList,
    meta: { title: 'Exam' }
  },
  {
    path: '/exam/:examID/paperList',
    name: 'PaperList',
    component: PaperList,
    meta: { title: 'PaperList' }
  },
  {
    path: '/contest/acm-scoreboard/:contestID',
    name: 'ACMScoreBoard',
    component: ACMScoreBoard,
    meta: { title: 'ACM Contest ScoreBoard' }
  },
  {
    path: '/paper/acm-scoreboard/:paperID',
    name: 'ACMScoreBoard',
    component: paperACMScoreBoard,
    meta: { title: 'ACM exam ScoreBoard' }
  },
  {
    path: '/contest/oi-scoreboard/:contestID',
    name: 'OIScoreBoard',
    component: OIScoreBoard,
    meta: { title: 'OI Contest ScoreBoard' }
  },
  {
    path: '/exam/oi-scoreboard/:examID',
    name: 'OIScoreBoard',
    component: paperOIScoreBoard,
    meta: { title: 'OI Exam ScoreBoard' }
  },
  {
    name: 'ContestDetails',
    path: '/contest/:contestID/',
    component:ContestDetails,
    meta: {title: 'Contest Details',requireAuth:true},
    children: [
      {
        name: 'ContestSubmissionList',
        path: 'submissions',
        component: SubmissionList,
        meta: { title: 'Contest Submission' }
      },
      {
        name: 'ContestSubmissionDeatil',
        path: 'problem/:problemID/submission-deatil/:submitID',
        component: SubmissionDetails,
        meta: { title: 'Contest Submission Deatil' }
      },
      {
        name: 'ContestProblemList',
        path: 'problems',
        component: ContestProblemList,
        meta: { title: 'Contest Problem' }
      },
      {
        name: 'ContestProblemDetails',
        path: 'problem/:problemID/',
        component: Problem,
        meta: { title: 'Contest Problem Details' }
      },
      {
        name: 'ContestAnnouncementList',
        path: 'announcements',
        component: Announcements,
        meta: { title: 'Contest Announcement' }
      },
      {
        name: 'ContestRank',
        path: 'rank',
        component: ContestRank,
        meta: { title: 'Contest Rank' }
      },
      {
        name: 'ContestACInfo',
        path: 'ac-info',
        component: ACMInfoAdmin,
        meta: { title: 'Contest AC Info'}
      },
      {
        name:'ContestRejudgeAdmin',
        path:'rejudge',
        component:ContestRejudgeAdmin,
        meta: { title: 'Contest Rejudge',requireSuperAdmin:true }
      },
      {
        name: 'ContestComment',
        path:'comment',
        component: ContestComment,
        meta: { title: 'Contest Comment'}
      },
      {
        name: 'ContestPrint',
        path:'print',
        component: ContestPrint,
        meta: { title: 'Contest Print'}
      },
      {
        name: 'ContestAdminPrint',
        path:'admin-print',
        component: ContestAdminPrint,
        meta: { title: 'Contest Admin Print'}
      }
    ]
  },
  {
    name: 'PaperDetails',
    path: '/paper/:paperID/',
    component:PaperDetails,
    meta: {title: 'Paper Details',requireAuth:true},
    children: [
      {
        name: 'PaperSubmissionList',
        path: 'submissions',
        component: SubmissionList,
        meta: { title: 'Paper Submission' }
      },
      {
        name: 'PaperSubmissionDeatil',
        path: 'problem/:problemID/submission-deatil/:submitID',
        component: SubmissionDetails,
        meta: { title: 'Paper Submission Deatil' }
      },
      {
        name: 'PaperProblemList',
        path: 'problems',
        component: PaperProblemList,
        meta: { title: 'Paper Problem' }
      },
      {
        name: 'PaperProblemDetails',
        path: 'problem/:problemID/',
        component: Problem,
        meta: { title: 'Paper Problem Details' }
      },
      {
        name: 'PaperAnnouncementList',
        path: 'announcements',
        component: Announcements,
        meta: { title: 'Paper Announcement' }
      },
      {
        name: 'PaperRank',
        path: 'rank',
        component: PaperRank,
        meta: { title: 'Paper Rank' }
      },
      {
        name: 'PaperACInfo',
        path: 'ac-info',
        component: paperACMInfoAdmin,
        meta: { title: 'Paper AC Info'}
      },
      {
        name:'PaperRejudgeAdmin',
        path:'rejudge',
        component:PaperRejudgeAdmin,
        meta: { title: 'Paper Rejudge',requireSuperAdmin:true }
      },
      {
        name: 'PaperComment',
        path:'comment',
        component: PaperComment,
        meta: { title: 'Paper Comment'}
      },
      {
        name: 'PaperPrint',
        path:'print',
        component: PaperPrint,
        meta: { title: 'Paper Print'}
      },
      {
        name: 'PaperAdminPrint',
        path:'admin-print',
        component: PaperAdminPrint,
        meta: { title: 'Paper Admin Print'}
      }
    ]
  },
  {
    path: '/status',
    name: 'SubmissionList',
    component: SubmissionList,
    meta: { title: 'Status' }
  },
  {
    path: '/submission-detail/:submitID',
    name: 'SubmissionDeatil',
    component: SubmissionDetails,
    meta: {title: 'Submission Deatil' }
  },
  {
    path: '/acm-rank',
    name: 'ACM Rank',
    component: ACMRank,
    meta: { title: 'ACM Rank' }
  },
  {
    path: '/oi-rank',
    name: 'OI Rank',
    component: OIRank,
    meta: { title: 'OI Rank' }
  },
  {
    path: '/reset-password',
    name: 'SetNewPassword',
    component: SetNewPassword,
    meta: { title: 'Reset Password' }
  },
  {
    name: 'UserHome',
    path: '/user-home',
    component: UserHome,
    meta: { title: 'User Home' }
  },
  {
    name: 'Setting',
    path: '/setting',
    component: Setting,
    meta: { requireAuth: true, title: 'Setting' }
  },
  {
    name: 'Logout',
    path: '/logout',
    component: Logout,
    meta: { requireAuth: true, title: 'Logout' }
  },
  {
    path: '/discussion',
    name: 'AllDiscussion',
    meta: {title: 'Discussion'},
    component:DiscussionList
  },
  {
    path: '/discussion/:problemID',
    name: 'ProblemDiscussion',
    meta: {title: 'Discussion'},
    component:DiscussionList
  },
  {
    path: '/discussion-detail/:discussionID',
    name:'DiscussionDetails',
    meta: {title: 'Discussion Details'},
    component: Discussion
  },
  {
    path: '/group',
    name: 'GroupList',
    component: GroupList,
    meta: {title: 'Group'}
  },
  {
    path: '/group/:groupID',
    name: 'GroupDetails',
    component: GroupDetails,
    meta: {title: 'Group Details', requireAuth: true},
    children: [
      {
        path: 'announcement',
        name: 'GroupAnnouncementList',
        component: GroupAnnouncementList,
        meta: { title: 'Group Announcement' },
      },
      {
        path: 'problem',
        name: 'GroupProblemList',
        component: GroupProblemList,
        meta: { title: 'Group Problem' },
      },
      {
        name: 'GroupProblemDetails',
        path: 'problem/:problemID/',
        component: Problem,
        meta: { title: 'Group Problem Details' }
      },
      {
        path: 'training',
        name: 'GroupTrainingList',
        component: GroupTrainingList,
        meta: { title: 'Group Training' }
      },
      {
        name: 'GroupTrainingDetails',
        path: 'training/:trainingID/',
        component:TrainingDetails,
        meta: {title: 'Group Training Details'},
        children: [
          {
            name: 'GroupTrainingProblemList',
            path: 'problems',
            component: TrainingProblemList,
            meta: { title: 'Group Training Problem' }
          },
          {
            name: 'GroupTrainingProblemDetails',
            path: 'problem/:problemID/',
            component: Problem,
            meta: { title: 'Group Training Problem Details' }
          },
          {
            name: 'GroupTrainingRank',
            path: 'rank',
            component: TrainingRank,
            meta: { title: 'Group Training Rank' }
          }
        ]
      },
      {
        path: 'contest',
        name: 'GroupContestList',
        component: GroupContestList,
        meta: { title: 'Group Contest' }
      },
      {
        path: 'status',
        name: 'GroupSubmissionList',
        component: SubmissionList,
        meta: { title: 'Group Status' }
      },
      {
        path: 'submission-detail/:submitID',
        name: 'GroupSubmissionDeatil',
        component: SubmissionDetails,
        meta: {title: 'Group Submission Deatil' }
      },
      {
        path: 'discussion',
        name: 'GroupDiscussionList',
        component: GroupDiscussionList,
        meta: { title: 'Group Discussion' }
      },
      {
        path: 'discussion/:problemID',
        name: 'GroupProblemDiscussion',
        meta: {title: 'Group Discussion'},
        component:GroupDiscussionList
      },
      {
        path: 'discussion-detail/:discussionID',
        name:'GroupDiscussionDetails',
        meta: {title: 'Group Discussion Details'},
        component: Discussion
      },
      {
        path: 'member',
        name: 'GroupMemberList',
        component: GroupMemberList,
        meta: { title: 'Group Member' }
      },
      {
        path: 'setting',
        name: 'GroupSetting',
        component: GroupSetting,
        meta: { title: 'Group Setting' }
      },
    ]
  },
  {
    path: '/codeSummarization',
    meta: {title: 'CodeSummarization'},
    component:CodeSummarization,
  },
  {
    path: '/introduction',
    meta: {title: 'Introduction'},
    component:Introduction,
  },
  {
    path: '/developer',
    meta: {title: 'Developer'},
    component:Developer,
  },
  {
    path: '/externalSearch',
    meta: {title: 'externalSearch'},
    component:ExternalSearch,
  },
  {
    name:'Message',
    path:'/message/',
    component:Message,
    meta: { requireAuth: true, title: 'Message' },
    children: [
      {
        name: 'DiscussMsg',
        path: 'discuss',
        component: UserMsg,
        meta: { requireAuth: true,title: 'Discuss Message' }
      },
      {
        name: 'ReplyMsg',
        path: 'reply',
        component: UserMsg,
        meta: { requireAuth: true,title: 'Reply Message' }
      },
      {
        name: 'LikeMsg',
        path: 'like',
        component: UserMsg,
        meta: { requireAuth: true,title: 'Like Message' }
      },
      {
        name: 'SysMsg',
        path: 'sys',
        component: SysMsg,
        meta: { requireAuth: true,title: 'System Message' }
      },
      {
        name: 'MineMsg',
        path: 'mine',
        component: SysMsg,
        meta: { requireAuth: true,title: 'Mine Message' }
      },
    ]
  },
  {
    path: '*',
    meta: {title: '404'},
    component:NotFound,
    // meta: { title: '404' }
  }
]
export default ojRoutes
