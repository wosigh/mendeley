include Makefile.inc

PLUGIN		:=	mendeley

PDLLIB		:=	libpdl
OAUTHLIB	:=	liboauth

CFLAGS		:=	-pthread $(MARCH_TUNE) -I. -I$(ROOT)${PREFIX}/include
								
LIBDIRS		:=	-L$(PDLLIB) -L$(ROOT)${PREFIX}/lib

LIBS		:=	-lpdl -lm -lcrypto -lssl -lcurl -lmjson -lz

.PHONY		:	clean clobber

all: $(PLUGIN)

$(PLUGIN): $(OBJECTS) $(PDLLIB)/$(PDLLIB).so
	$(CC) $(CFLAGS) $(LIBDIRS) $(LIBS) threadpool.c xmalloc.c hash.c oauth_http.c oauth.c mendeley.c -o $(PLUGIN)

.PHONY: $(PDLLIB)/$(PDLLIB).so
$(PDLLIB)/$(PDLLIB).so:
	cd $(PDLLIB); $(MAKE)

push: 

clobber: clobber-$(PDLLIB)
	rm -rf *.o $(PLUGIN)
	
clobber-$(PDLLIB):
	cd $(PDLLIB); $(MAKE) clean

clean: clobber
