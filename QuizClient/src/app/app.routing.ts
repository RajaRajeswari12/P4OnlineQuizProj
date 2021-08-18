import { RouterModule } from "@angular/router";
import { GetQuizComponent } from "./get-quiz/get-quiz.component";
import { IndexPageComponent } from "./index-page/index-page.component";
import { LoginComponent } from "./login/login.component";
import { LoginRoutingGuard } from "./loginRouting.service";
import { ViewQuizComponent } from "./view-quiz/view-quiz.component";

export const AppRouting = RouterModule.forRoot([
    {path:'home',component:IndexPageComponent},
    {path:'login',component:LoginComponent},
    {path:'getQuiz',component:GetQuizComponent,canActivate:[LoginRoutingGuard]},
    {path:'viewQuiz/:quizId',component:ViewQuizComponent,canActivate:[LoginRoutingGuard]}])