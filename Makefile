########################################################################
####################### Makefile Template ##############################
########################################################################
# Student settings
NAME = Andrew McLaughlin
SID = 1001988355
EMAIL = adm8355@mavs.uta.edu
SEMESTER = SPRING2025
PROJECT=PROJ03
YOUTUBE=https://youtube.com/shorts/ZNzB9sXFybg?feature=share
 

####### DO NOT EDIT BELOW THIS LINE!!! #########
author: 
	@echo $(NAME)
	@echo $(SID)
	@echo $(EMAIL)
	@echo $(SEMESTER)
	@echo $(YOUTUBE)

submit:
submit:
	git ls-files | zip -r "submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip" -@
	@echo "Submission zip file created: submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip"