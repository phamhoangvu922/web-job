PGDMP     1    	                x            webjob_data    12.1    12.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16557    webjob_data    DATABASE     �   CREATE DATABASE webjob_data WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Vietnamese_Vietnam.1258' LC_CTYPE = 'Vietnamese_Vietnam.1258';
    DROP DATABASE webjob_data;
                postgres    false            �            1259    24749    congty    TABLE     �   CREATE TABLE public.congty (
    idcongty text NOT NULL,
    tencongty text,
    sdt text,
    mota text,
    web text,
    email text
);
    DROP TABLE public.congty;
       public         heap    postgres    false            �            1259    16558    congviec    TABLE       CREATE TABLE public.congviec (
    idcongviec text NOT NULL,
    tencongviec text,
    macongty text,
    chitiet text,
    yeucau text,
    ngaydang text,
    diadiem text,
    dacdiem text,
    luong text,
    ngayhan text,
    loai text,
    thanhpho text
);
    DROP TABLE public.congviec;
       public         heap    postgres    false            �            1259    32941    users    TABLE     f   CREATE TABLE public.users (
    ten text,
    email text NOT NULL,
    password text,
    bio text
);
    DROP TABLE public.users;
       public         heap    postgres    false                      0    24749    congty 
   TABLE DATA           L   COPY public.congty (idcongty, tencongty, sdt, mota, web, email) FROM stdin;
    public          postgres    false    203   q                 0    16558    congviec 
   TABLE DATA           �   COPY public.congviec (idcongviec, tencongviec, macongty, chitiet, yeucau, ngaydang, diadiem, dacdiem, luong, ngayhan, loai, thanhpho) FROM stdin;
    public          postgres    false    202   ,                 0    32941    users 
   TABLE DATA           :   COPY public.users (ten, email, password, bio) FROM stdin;
    public          postgres    false    204   �$       �
           2606    24756    congty congty_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.congty
    ADD CONSTRAINT congty_pkey PRIMARY KEY (idcongty);
 <   ALTER TABLE ONLY public.congty DROP CONSTRAINT congty_pkey;
       public            postgres    false    203            �
           2606    16565    congviec congviec_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.congviec
    ADD CONSTRAINT congviec_pkey PRIMARY KEY (idcongviec);
 @   ALTER TABLE ONLY public.congviec DROP CONSTRAINT congviec_pkey;
       public            postgres    false    202            �
           2606    32948    users users_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (email);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    204               �  x�}TOo�H?���A��P
��!l˦�Q�p�N��l33Y{��#B�B����a��TQ��X�=����o�o�bK�M�Ğ��ߟ7S����N��h�[��j���^���}7׽�6 �[�#IO#J�� �A��PX��tB!�~FB	m�����A�C_�%%�m�Y( �j��@�E(�!��2�byI��<k�xT�FyR�{�_[���{��F��κc���K��T��p���,K>rd����0˧�-NG�aҩ��l��@ ���4� � ����e�Y�$[�m����a��d���qG��dk�I��1��}�,��0ΒO�c�?�JW�T>�%��θ�)�F�0���#�?'�\�g�R��l1�wEYr�~��>��0"&s��%���y��_c�Qʿr*�{����jL2�Um�s;W�+�6��N��i�����;�s�����&�k'�̒w0Bq�zH�Ӄ�$Z�%��'��L�}9pͦ�1�ɉ���V�]1�E�Zrf��<2g��5��F���\�	QXi6�!Q쏶64�;�8�$�W�L,!���IB}l�Ô�t�P�/1�\�]�0���+k$⸼RV��J�[(k6�t����=����@� ��|BD�D��6L�vB�
���c7�4?K$�`Q�$�贺%=���8dɜ�TYQ�m���t,��}���^�����ˆn�H�\�m�/a/H�!��b�)����Sx�=�3�L�@�3E��r�C/���Z[I���D�@5�N�|��@�t9��='����Z��*֎R�7�[:�P�������7��n��v��x�Y����h=�b�;�}��+�6sYsUGk^�ʇ�Ӥ~˅���3�;~Y*:[�S��1fq�����-s���p�mά2�����g�������s            x��Z[oG�~f~E;���5Nf�(��K�,2�0�%v���Pa�<0y��L0X,����1���1�Av"a���/�fwS�L� 2�]u�\�s�s��n��lt�|6�6�4�݋�O]O���������-:��E�5ڽvcM���7��������T/��?����I8�^\�1����A�&��_�����P��7]�?E�-Οb�/���q \/�����ț��z�p���ߋo$x�Hܼ���K))&����Ә��(��ų��e��/.������X[�"��������'��g��Ȉ�q���,.�S��-����Б]�͓@L鳋���M�?p��9BOωW��^�0h�w,�G�osR3������0��U�`Q�)���>̿��s::���&Zrgq���2�Y����/_?�S��K�^}Ar��BR�Yc���{������͛b��P�=�F�#vu�5�1<j�u�r�_�t��zo}���o��b�':�~ì~�����Ʈy#dr�2F*�Q"�r��qL�^�;����No�k�`C�c�>Qn�)!}�8C%G����1���@��tD��
����X��/gB��*�tJ�\`�$LI��j��(��:�}�0nf�o�%2S���"�B(�U"�'�8w3�Gi�(pUc�QIT�]���De�/u�C%N�L�9�(gɖ�&�0�����\&�J��u���'}n�S�s�ꉗ�/Qs�OՒ��U�3>���@�S�>è��QD��3�yx�3CȒ)��|����$!
�3�<�>Q��$��AjWf��5N�+��^;��(8T�z�7���8<P��L4�2Mu�j���+�R�*m�i�R|�H�¼�H�P��a�u|��iJ�H����!fJ&��N��� �D%r�����t6��b�U�����K��E�U�f��6�bIIĥ�scM*��W�g��i��`P%Z��������TW��M�4];�CמĶ>I�@L��!�y��ڭ�2=վ��5�@�,���@0-��'�sO��t��P*e�lL��d�Ču��iW��D�.��QO����LW�'k`�܅)% ��ɉ�<��a#�ƞ�(9�cÉ����h���`�'��f�͍e��/���6a2���-Y9U���Z_	����ؿ��3��v���8<9xD����`�hw����B�p��#�3�=�����)N�#�,��DBHm����GʋbFF��b���=;Gt$'6LS�TC��{ڏ�(�fP�) �Q ��h��ͣ�:��kFu�3�5�	i8%#���pC��'�ex���|(�䡸I��ܧ~�`
�� �H�wJK�	q���a �w�xA�g�#Hˍ������$
��p�?N�b�ixk���;m��E���֦�����m��1>� l�w�[8Z!�D�G�C��d���^�n f�W��r�)n�����Ͱ~ۮ}�"��	��}�c��$>HF i66�_½?�g��	Q4Ϳ#xsU�#N7�%��q��qU�����հ��N��61�"�s���~�sx��xW'�%oMTL�
�}6q�� )��ǃ<�5�7u�=�� �kTdY��� ��`'�) C����Bv]zJ����pt�B�2�?7q����X�znWR�҆Q�d�{r�d�1qRXބp��Gd����x��&���11G�'���]2�%8�Ty�OY�H�F���n�2�����7���%��ᦶ��h�� �H�N�m�q��y;Ezg�[G���d��lh �ҵ����z�n�/���j*��+�k�v��������8��u�{�~��;P��M���n��N�����QK�[��@r��$�ЧB�"�C�e�"f�6��C�V�.����F"%E�MR-
���i��
5��}F��m�&�;ո�b1��'�x�2d��Di��N%q��[2 Y�!Z��%�\<�P̢q?�q%����q=�OA�#ڟ���@'��QH��9�|���c����|JdV��r+�����s���%+�#7_��!���@ޔ%؎X:A k�w)9�ޥ�E*���JX�d�����J���.�k�֦e�sɹd)Q೩Ok|V�Zg9N)S�ϰ.	��>����:�

�{��_j��\{r�����6��cX��*����
d���Mr�)�q\��~�V����kc��_������-p��u�� ���ʗv�pme���{��Xo}%�`8�ꘔ���ZÀc�$⸥à^�n4V�7���r���+բو�.-�T@���1����2(�Cu�� Hex�}|	���:3���hy�1�i�j87�����JNr��	�Eg������ϥRb*�{/+o�$uyZ�Hw��M��l:�%*i���"�F-���R �F��H13a��r��_��'\%�Ԥ�J�lL�͈��������}������h{`<��^M��ŕ'\��2u 0��~��H�'(�QS�e�؃�+�O0[��T��t�U6�V�f����`,pw/W�h)�0U���Z�8
�v8��`߱��T�(�]St��R����G,VK�e�i�3��B��Mmb��F	���|�5��(I�((��Ƕw�g.���C%B���P�8���ܰd����~_��Q��@�Y��o��T�����������nAo[etg�ft�#�SFbjmi��k7�8�+�h66ʫ����'���+W؍Mةs \
��L�z��?I�/�_��ͭe�/�΍F�;���|�b�n��G�~���n{�����_�Ԗ\m�>���G�����_jZ"$t�E8�?	��hOE����\��p�xq����}��h2������?�<�������6��|q�KB��Ĭ�z\�7��nN�l�_=��)��<"��8H���}�!����7�=~�]uCϥ�Y����oX�/q���TD�e�֖�(ci<#Z��zt����Y�^&���*כ�`	wX�t���2E`�x�$�Y�9�eM�s����F$9�T�+n�9�C\JIf A���qMR��Ω'�=�,�e��4�/i�v���砢I�v�1j�~��g!��7[�7�slX���:��'9L��Ŏ�������"CB�ݭ+e˪��lml���妩_(�hC�g�Hb�w[춇m�Ef�h���)�^�8�3ԅ���S�.�<�����Nl�yg��X�¥@����/�&7fZ2��3�/xP���C!�ϋc��-<�<������ǿ3!���fD�o�b��,�\Zw�
RQ�a�ŏo?�л���)��kS��{
���h���<ˬf��G=3 ���I��t�M@����N��)�ɯW�3��q���<��f��q_���2칒=�k����غյ�vgp�h�b�g|?�L7#O�M �Lx>�2u�2����??�m<V4�x������TR�C�Ö#���5�g��Q�ĭh�c[�u! �ȢP��������⅃�����J�l�m�A��#�
�8����M�{�!��`����
�9�ҹ�.˪��b��K1�g+��*3,ǂq9iu�_u���;o7� :Ih��!>!��FQ�Q�������u)��U�l��X_����+M�QoHM�Q��/�����>EڿS��W��2���(Z1�g��7�=1�v������?j�E�5*(�uSeJ����4���e�R�"�x���g�� �b�����B4�?b�8-Zy�ܡ:Դ�I_*�\��؊1�&�<�z��R�NLO�J_�˙ :+��J�w�Y�^��ܓ����l cj��j����U`���
MYi�\Q����Ŵ��,��60���zjf#�xuy(�S��l���ٴ��K3v�@�&@x�)_�+�j���w���JP1�3h��w�;Q ��`�)����&4R�!��l�`h�ː�z���Ǖ^~�.�\[.3����#�����	Gj5���]��)�zW �  Mcp�A�]\L\���P�Ȏ��S�����T�V��v8R�М0k��Ki��0o}��IL�c5t�y.H<�*�*��_wh$T�/]�9�J]�%��7������f Õ��(��N��Vt&P������\��&���ɬw�aӧ�9	���C@MQ�ԍhFA?��u�कnW7�d���՟9^��/n�*�2���5��Q���������h�F�o&f�ýn�-�w{�sc�z0PvI���Bi��gk�K�m�ш�����_+�	_�
F����ѐ�Q{ԇ{�̪?�(�M�ؤhWT�1E#`9Vg��We�x�V�?�3�>E4]O-a��I�N�|��j�R�k-?3��0r��MP��:��hǦ�G�a�tCd�T˔~�qF=8�ϲ/�_�-'<��*S��a��)�(����C�AV&q�UWݒ�2�ih|��7ŀ �PٲӔ�.X�zZK��fk�t�*3[��ku��Zn<%��=��v�e�K�M�$�����Qγ�87m�ʡG���|9�%G-;I�Ў����j�}��,�#�K����A=u�����RJ�Fx��W����7�J�>j�sE��w�W&Ԁ�q��$A�z���}[3R�m3�^vR��Qs٦
+Ι�w-���2����?&�B�gr^)-��H�P���9�
W3�/�J�6�.g�4�p��W���uw�-�f�Ϳ���w5�_ [���a�(y��[�2���~�8"�
�vk;�\�����ff).3Gǽ������Va��k�U�][ڜڛ��模�lpا����kQ�"�V��+ݠ�Ę*8��M,;��mA�ur�WQ���̣�(�5h�@�h�Á%���vk�g]��&-�Ee2&ʒ\>Ca�llV�j/�Կ���'်�Eۗ����<h���;�L��           x�u�˒�@��5^��Y�8��@9�9keӣ-�t�(�ud��H嶒�ȸH���d�oާ���IO���Z��9�*Ź�2l\�s2�I.nB������@�D^|e(��C��~� �p1N)s~�pAz�x:}.�jvG�?mcu����a���� C!�Tҳ��&�P��d��@O��/��x0�hW� ����C()� ~�����J����Y^+3	hw	i�*�7���k��Dw;+��V������w����l#��p�>	���L�<5��ݬ�dbR���Ύ�'�7u��@��T�l/ �K���GP�L9��geID�ݮ�
{l��Z�t�Z��WjV�+�̱�X�q�/cr?�w^pY��W�	�d*u>^ �|_i��"1��^��E�hs��V
��a˙Ȕ�;�mˏ��k��0�4���g�J� �P�`m��(a��Dn��꥞g���?�������v�M�_�;٣��\̧�q��ȖF����k*��K��~cG��_�P     