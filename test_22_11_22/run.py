import subprocess

proc = subprocess.Popen(['bash', 'test.sh'],
                        stdout=subprocess.PIPE,
                        stderr=subprocess.STDOUT,
                        universal_newlines=True)
while proc.poll() == None:
    # out = proc.communicate()
    out = proc.stdout.readline()
    print(out, end='')