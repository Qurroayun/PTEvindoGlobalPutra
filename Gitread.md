
#Buat branch dev & feature

git checkout -b dev
git checkout -b feature/login

#Kerjakan fitur di branch feature

git checkout feature/login
git add .
git commit -m "Implementasi login"
git push -u origin feature/login

#Merge ke dev via PR di GitHub (atau via CLI):

git checkout dev
git merge feature/login
git push origin dev

#Merge dev ke main (production)

git checkout main
git merge dev
git push origin main